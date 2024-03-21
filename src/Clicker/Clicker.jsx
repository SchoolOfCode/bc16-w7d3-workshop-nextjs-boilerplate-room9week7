import React from "react";

export default function Clicker() {
  function handleClick() {
    console.log("I clicked the button");
  }
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
