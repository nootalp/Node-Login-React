import { useState } from "react";

function Condition() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function sendEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }
  function cleanEmail() {
    // Defino um valor vazio para limpeza do email;
    setUserEmail("");
  }

  return (
    <div>
      <h2>Enter your email:</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendEmail}>Send email</button>
        {/* Se tem um email de usuário, execute algo.
        A limpeza de email retorna a condicional como falsa,
         ou seja, retornará ao estado inicial do app; */}
        {userEmail && (
          <div>
            <p>User email is {userEmail}</p>
            <button onClick={cleanEmail}>Clean email</button>
          </div>
        )}
      </form>
    </div>
  );
}

// export default Condition;
