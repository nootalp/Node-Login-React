import { useState } from "react"; // Hook deve ser importado;

function Form() {
  function registerUser(e) {
    e.preventDefault(); // Previne o comportamento padrão do submit, que seria mandar para o servidor;
    console.log(`User ${name} created an account with password: ${password}`);
  }
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <form onSubmit={registerUser}>
        <h1>Digite suas credinciais:</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)} // A cada letra digitada, muda o valor do State;
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Form;
