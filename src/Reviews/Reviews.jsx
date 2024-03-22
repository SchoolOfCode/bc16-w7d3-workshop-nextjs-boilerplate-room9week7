"use client";

import React, { useState, useEffect } from "react";

export default function Reviews() {
  //state variables that manages the selected country and review data.
  const [country, countryReviews] = useState("england");
  const [reviewData, setReviewData] = useState(null);

  // Fetch review data when country changes
  useEffect(() => {
    // Fetch review data based on country
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
    )
      // Parsing the response as JSON
      .then((response) => response.json())
      .then((data) => {
        // Logging the fetched data
        console.log(data);
        // Update review data state with fetched data
        setReviewData(data);
      })
      .catch((error) => {
        // Log fetch errors
        console.error("Error fetching data:", error);
      });
    // Dependency array ensures useEffect runs when 'country' changes
  }, [country]);

  return (
    <>
      {/* Buttons that select the different countries */}
      <div>
        <button onClick={() => countryReviews("england")}>England</button>
        <button onClick={() => countryReviews("scotland")}>Scotland</button>
        <button onClick={() => countryReviews("wales")}>Wales</button>
      </div>
      {/* Display the selected country */}
      <h1>{country}</h1>
      {/* Render the review data */}
      {reviewData && (
        <div>
          {/* Display review data properties */}
          <p>{reviewData.author}</p>
          <p>{reviewData.businessName}</p>
          <p>{reviewData.location}</p>
          <p>{reviewData.text}</p>
        </div>
      )}
    </>
  );
}
