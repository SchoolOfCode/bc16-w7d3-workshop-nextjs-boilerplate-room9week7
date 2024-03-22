"use client";

import React, { useState, useEffect } from "react";

export default function Reviews() {
  const [country, countryReviews] = useState("england");
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Logging the fetched data
        setReviewData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [country]);

  return (
    <>
      <div>
        <button onClick={() => countryReviews("england")}>England</button>
        <button onClick={() => countryReviews("scotland")}>Scotland</button>
        <button onClick={() => countryReviews("wales")}>Wales</button>
      </div>
      <h1>{country}</h1>
      {reviewData && (
        <div>
          <p>{reviewData.author}</p>
          <p>{reviewData.businessName}</p>
          <p>{reviewData.location}</p>
          <p>{reviewData.text}</p>
          {/* Render additional properties as needed */}
        </div>
      )}
    </>
  );
}
