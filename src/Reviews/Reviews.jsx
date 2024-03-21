"use client";

import React, { useState, useEffect } from "react";

export default function Reviews() {
  const [country, countryReviews] = useState("england");

  console.log("render");

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [country]);

  return (
    <>
      <div>
        <button onClick={() => countryReviews("england")}>England</button>
        <button onClick={() => countryReviews("scotland")}>Scotland</button>
        <button onClick={() => countryReviews("wales")}>Wales</button>
      </div>
      <h1>{country}</h1>
      
    </>
  );
}
