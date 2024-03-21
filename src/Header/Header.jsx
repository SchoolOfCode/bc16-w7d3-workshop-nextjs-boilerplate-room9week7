import Link from "next/link";
import { useState } from "react";

// As a User I should be able to click on the menu button and the menu should then appear
// As a User I should be able to click a close button and the menu should close

// Make some toggle state
// Make the state a boolean
// Make the state false to begin with

// Check work

// Create a click handler function
// Call the handler when the button is clicked
// We are going to update state in that function

// Conditioinal rendering of menu
// State is false - menu not rendered
// State is true - menu is rendered

// Add styling

export default function Header({ title }) {
  const [menuToggle, setMenuToggle] = useState(false);

  console.log(menuToggle);

  function handleClick() {
    setMenuToggle(!menuToggle);
  }
  return (
    <>
      <header className="header">
        <button>Icon</button>
        <h2>{title}</h2>
        <Link href="/Founders">Founders</Link>
        <button onClick={handleClick}>Menu</button>
        {menuToggle && (
          <div className="mobile-menu">
            <button onClick={handleClick}>Burger menu</button>
          </div>
        )}
      </header>
    </>
  );
}
