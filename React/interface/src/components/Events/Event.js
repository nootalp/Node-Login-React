import Button from "./Button";

function Event() {
  function myEvent() {
    console.log(`I was activated by 'Trigger!'.`);
  }
  return (
    <div>
      <h2>Click here to trigger an event:</h2>
      {/* Return 'Button'Component from this Component; */}
      <Button event={myEvent} text="First event from Button Component." />
    </div>
  );
}

export default Event;
