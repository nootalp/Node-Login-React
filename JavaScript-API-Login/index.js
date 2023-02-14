const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
mongoose.set("strictQuery", false);

require("dotenv").config();

var port = 3000;

const http = express();

//Configure JSON in response;
http.use(express.json());

// Models
const User = require("./models/User");

// Path;
http.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome!" });
});

// Private route com rota dinâmica no express; Só pra quem tem conta logada;
http.get("/auth/:id", checkToken, async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id, "-passwd");

  if (!user) {
    return res.status(404).json({ msg: "User not found." });
  }

  res.status(200).json({ user });
});

// Middleware; Next, se estiver tudo bem, pode continuar a requisição;
function checkToken(req, res, next) {
  // Token no header;
  const authHeader = req.headers["authorization"];
  // Verifica se o token existe, se existir corte ele depois do espaço e coloque na constante 'Token';
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acess negated." });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(400).json({ msg: "Invalid token." });
  }
}

// Register user;
http.post("/auth/register", async (req, res) => {
  const { name, email, passwd, confirmpasswd } = req.body;

  // Validations;
  if (!name) {
    return res.status(422).json({ msg: "Must have a name." });
  }
  // if (!email) {
  //   return res.status(422).json({ msg: "Must have a email." });
  // }
  if (!passwd) {
    return res.status(422).json({ msg: "Must have a password." });
  }
  if (passwd !== confirmpasswd) {
    return res.status(422).json({ msg: "Passwords don't match." });
  }
  // Check if user exists;
  // const userExists = await User.findOne({ email: email });

  // if (userExists) {
  //   return res.status(422).json({ msg: "Please use another email." });
  // }

  // Create a strong password with bcrypt;
  const salt = await bcrypt.genSalt(12);
  const passwdHash = await bcrypt.hash(passwd, salt);

  // New instance of User class;
  const user = new User({
    name,
    // email,
    // Hash the password;
    passwd: passwdHash,
  });

  // A criação vai passar por uma validação dos processor do servidor;
  try {
    // Salva o usuário no banco de dados;
    await user.save();
    res.status(201).json({ msg: "User was created with sucess." });
  } catch (error) {
    console.log(error);
    // Não é bom retornar um erro que está acontendo no servidor para o cliente, mas para efeito didático...
    res
      .status(500)
      .json({ msg: "Ocurrs an error at the server. Try again later." });
  }
});

http.post("/auth/login", async (req, res) => {
  const { /*email,*/ passwd } = req.body;

  // if (!email) {
  //   return res.status(422).json({ msg: "E-mail is obrigatory." });
  // }
  if (!passwd) {
    return res.status(422).json({ msg: "The password is obrigatory." });
  }
  // Check if user exists;
  // const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "User not found." });
  }

  // Compara a senha colocada com a senha do email colocado;
  const checkPasswd = await bcrypt.compare(passwd, user.passwd);
  if (!checkPasswd) {
    return res.status(422).json({ msg: "Invalid Passwod." });
  }

  try {
    const secret = process.env.SECRET;
    // Dados do usuário que serão compostos no token;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.status(200).json({ msg: "Authentication sucessful realized.", token });
  } catch (err) {
    console.log(error);
    // Não é bom retornar um erro que está acontendo no servidor para o cliente, mas para efeito didático...
    res
      .status(500)
      .json({ msg: "Ocurrs an error at the server. Try again later." });
  }
});

// Credentials with .env;
const dbUser = process.env.DB_USER;
const dbPasswd = process.env.DB_PASSWD;

// Connect to the bank driver;
mongoose
  .connect(
    // Use .net/{DBname} // Make sure that the string is correct;
    `mongodb+srv://${dbUser}:${dbPasswd}@cluster0.udht3qi.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    http.listen(port);
    console.log("Sucessful connection!");
  })
  .catch((err) => console.log(err));
