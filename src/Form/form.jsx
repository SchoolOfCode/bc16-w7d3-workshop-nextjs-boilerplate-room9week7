"use client";
// import ".form.css"; //Import CSS styles
import { useState } from "react"; //Import useState hook from React

export default function Form() {
  const [fullName, setFullName] = useState(""); //state variable for full name
  const [postCode, setPostcode] = useState(""); //state variable for postcode
  const [houseNumber, setHouseNumber] = useState(""); //state variable for house/flat number
  const [streetName, setStreetName] = useState(""); //state variable for street name
  const [city, setCity] = useState(""); //state variable for city
  const [phoneNumber, setPhoneNumber] = useState(""); //state variable for phone number
  const [email, setEmail] = useState(""); //state variable for email address

  return (
    <div className="form">
      <form>
        <ul>
          <li>
            <label>Full Name: </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </li>
          <li>
            <label>Post Code: </label>
            <input
              type="text"
              value={postCode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </li>
          <li>
            <label>House Number: </label>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </li>
          <li>
            <label>Street Name: </label>
            <input
              type="text"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </li>
          <li>
            <label>City: </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </li>
          <li>
            <label>Phone Number: </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </li>
          <li>
            <label>Email Address: </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>

          <li>
            <button>Request Design Consultation</button>
          </li>
          {fullName}
        </ul>
      </form>
    </div>
  );
}

