import Link from "next/link";
import "react";
import "Header.css";

// As a User I should be able to click on the menu button and the menu should then appear
// As a User I should be able to click a close button and the menu should close

// Make some toggle state
// Make the state a boolean
// Make the state false to begin with

// Create a click handler function
// Call the handler when the button is clicked
// We are going to update state in that function

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h2>{props.title}</h2>
        <Link href="/Founders">Founders</Link>
      </header>
    </>
  );
}
