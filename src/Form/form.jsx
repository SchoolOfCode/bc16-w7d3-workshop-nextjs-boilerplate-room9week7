"use client";
import React, { useReducer } from "react";
import { useForm } from 'react-hook-form';

export default function Form() {
  const initState = {
    data: {
      fullName: "",
      postCode: "",
      houseNumber: "",
      streetName: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    errorStatus: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_FORM_DATA":
        // Make a copy of current state
        let newState = { ...state };

        // grab the data out of your action's payload
        const fieldName = action.payload.name;
        const newFieldValue = action.payload.value;

        // update the newState with the changed data
        newState.data[fieldName] = newFieldValue;

        // return new state 🔥🚀
        console.log(newState);
        return newState;

        // dont forget your breaks - important
        break;

      default:
        return state;
    }
  }

  function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleChange = (e) => {
      dispatch({
        type: "CHANGE_FORM_DATA",
        payload: {
          name: e.target.name,
          value: e.target.value,
        },
      });
    };

    return (
      <form>
        <ul>
          <li>
            <label>Full Name: </label>
            <input type="text" name="fullName" onChange={handleChange} />
          </li>
          <li>
            <label>Post Code: </label>
            <input type="text" name="postCode" onChange={handleChange} />
          </li>
          <li>
          <label>House Number: </label>
          <input type="text" name="houseNumber" onChange={handleChange} />
          </li>
          <li>
          <label>Street Name: </label>
          <input type="text" name="streetName" onChange={handleChange} />
          </li>
          <li>
            <label>City: </label>
            <input type="text" name="city" onChange={handleChange} />
          </li>
          <li>
            <label>Phone Number: </label>
            <input type="text" name="phoneNumber" onChange={handleChange} />
          </li>
          <li>
            <label>Email Address: </label>
            <input type="text" name="email" onChange={handleChange} />
          </li>
        </ul>
      </form>
    );
  }

  return <ContactForm />;
}
