"use client";

import React, { useState, useEffect } from "react";

export default function Reviews() {
  const [resourceType, setResourceType] = useState("england");
  const [items, setItems] = useState([]);

  console.log("render");

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${resourceType}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("england")}>England</button>
        <button onClick={() => setResourceType("scotland")}>Scotland</button>
        <button onClick={() => setResourceType("wales")}>Wales</button>
      </div>
      <h1>{resourceType}</h1>
      
    </>
  );
}
