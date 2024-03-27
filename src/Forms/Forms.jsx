"use client";
// import ".form.css"; //Import CSS styles from css
import React, { useReducer } from "react"; // Don't forget to import React

function reducer(state, action) {

  switch(action.type){
    case "NAME_CHANGED":
    // return a new state with that one prperty changed
      let newState = {...state};
      newState.fullName = action.payload.newNameValue;
      
      console.log(newState)
      return newState;



    case "POSTCODE_CHANGED":
      // return a new state with that one prperty changed
      let newStateTwo = {...state};
      newStateTwo.email = action.payload.newPostcodeValue;
      console.log(newStateTwo)
      return newStateTwo;
   
      default:
   
      return state;
  }

}

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

  const [state, dispatchEvent] = useReducer(reducer, initState);

  // Event handlers for updating state variables

  const handleFullNameChange = (event) => {
    if (event.target.name === "fullName") {
      // setFullName(event.target.value);
      dispatchEvent({
        type: 'NAME_CHANGED',
        payload: {
        newNameValue: event.target.value
        }
      })
    }
  };

  const handlePostcodeChange = (event) => {
    if (event.target.name === "postcode") {
      // setFullName(event.target.value);
      dispatchEvent({
        type: 'POSTCODE_CHANGED',
        payload: {
        newPostcodeValue: event.target.value
        }
      })
    }
  };

  const handleHouseNumberChange = (event) => {
    if (event.target.name === "houseNumber") setHouseNumber(event.target.value);
   
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
              value={state.fullName}
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
              value={state.postcode}
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
              value={state.houseNumber}
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
              value={state.streetName}
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
              value={state.city}
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
              value={state.phoneNumber}
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
              value={state.email}
              onChange={handleEmailChange}
            />
          </label>
        </li>
      </ul>
      <button type="submit">Request Design Consultation</button>
    </form>
  );
}
