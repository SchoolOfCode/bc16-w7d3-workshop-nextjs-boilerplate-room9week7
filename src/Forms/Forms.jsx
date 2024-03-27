"use client";
// import ".form.css"; //Import CSS styles from css
import React, { useReducer } from "react"; // Don't forget to import React

export default function Forms() {

  const initState = {
    fullName: "",
    postcode: "",
    houseNumber: "",
    streetName: "",
    city: "",
    phoneNumber: "",
    email: "",
    errorStatus: false,
  };

  // Event handlers for updating state variables

  const handleFullNameChange = (event) => {
    if (event.target.name === "fullName") {
      setFullName(event.target.value);
      console.log(fullName);
    }
  };

  const handlePostcodeChange = (event) => {
    if (event.target.name === "postcode") {
      setPostcode(event.target.value);
      console.log(postcode);
    }
  };

  const handleHouseNumberChange = (event) => {
    if (event.target.name === "houseNumber") setHouseNumber(event.target.value);
    console.log(houseNumber);
  };

  const handleStreetNameChange = (event) => {
    if (event.target.name === "streetName") setStreetName(event.target.value);
  };

  const handleCityChange = (event) => {
    if (event.target.name === "city") setCity(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    if (event.target.name === "phoneNumber") setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    if (event.target.name === "email") setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Information</h1>
      <ul>
        <li>
          <label>
            Full Name:
            <input
              name="fullName"
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
        </li>
        <li>
          <label>
            Postcode:
            <input
              name="postcode"
              type="text"
              value={postcode}
              onChange={handlePostcodeChange}
            />
          </label>
        </li>
        <li>
          <label>
            House/Flat Number:
            <input
              name="houseNumber"
              type="text"
              value={houseNumber}
              onChange={handleHouseNumberChange}
            />
          </label>
        </li>
        <li>
          <label>
            Street Name:
            <input
              name="streetName"
              type="text"
              value={streetName}
              onChange={handleStreetNameChange}
            />
          </label>
        </li>
        <li>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={city}
              onChange={handleCityChange}
            />
          </label>
        </li>
        <li>
          <label>
            Phone Number:
            <input
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
        </li>
        <li>
          <label>
            Email Address:
            <input
              name="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </li>
      </ul>
      <button type="submit">Request Design Consultation</button>
    </form>
  );
}
