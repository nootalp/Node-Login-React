function click() {
  console.log("Booom!");
}

function Event() {
  return (
    <div>
      <p>Shoot torpedo:</p>
      <button onClick={click}>Shooot!</button>
    </div>
  );
}

export default Event;
