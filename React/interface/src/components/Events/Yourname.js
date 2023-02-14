// State Lift
function Yourname({ setName }) {
  return (
    <div>
      <h1>State Lift</h1>
      <h2>Enter your name:</h2>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Yourname;
