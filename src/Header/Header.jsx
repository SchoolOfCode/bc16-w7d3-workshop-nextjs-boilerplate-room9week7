"use client";

import { useState, useEffect } from "react";
import "./Header.css";

import Link from "next/link";
import { useState } from "react";

// When I click the on the menu icon and the menu should then appear
// When I click the on the X icon the menu should disapear

// Make some toggle state
// Make the state a boolean
// Make the state false to begin with

// check our work

// Create a click handler function
// Call the handler when the open button is clicked
// Call the handler when the closed button is clicked
// The state should be updated

// Conditional rendering of the menu
// If state = false - menu is not rendered
// If state = true - menu is rendered

// Add some styling

// As a developer I want to log every time a customer opens the menu

// Import useEffect
// write my useEffect
// console.log("Menu Opened")
// run the useEffect when menuToggle changes
// check what the state actually is before we log (only run when true)

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (menuToggle) {
      console.log("menuOpenCount");
    }
  }, [menuToggle]);

  function handleClick() {
    setMenuToggle(!menuToggle);
  }

  return (
    <>
      <header className="header">
        <h3>🔥Fireplace Palace</h3>

        <button onClick={handleClick}>
          <Link href="/">Home</Link>
        </button>
        {menuToggle ? (
          <div className="mobile-menu">
            <button onClick={handleClick}>Close Menu</button>
          </div>
        ) : null}

        <Link href="/founders">Founders</Link>
      </header>
    </>
  );
}
