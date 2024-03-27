// import ".form.css"; //Import CSS styles
import { useState } from "next/client"; //Import useState hook from React

export default function Form() {
  const [fullName, setFullName] = useState(""); //state variable for full name
  const [postcode, setPostcode] = useState(""); //state variable for postcode
  const [houseNumber, setHouseNumber] = useState(""); //state variable for house/flat number
  const [streetName, setStreetName] = useState(""); //state variable for street name
  const [city, setCity] = useState(""); //state variable for city
  const [phoneNumber, setPhoneNumber] = useState(""); //state variable for phone number
  const [email, setEmail] = useState(""); //state variable for email address

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleHouseNumberChange = (event) => {
    setHouseNumber(event.target.value);
  };

  const handleStreetNameChange = (event) => {
    setStreetName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
              type="text"
              value={streetName}
              onChange={handleStreetNameChange}
            />
          </label>
        </li>
        <li>
          <label>
            City:
            <input type="text" value={city} onChange={handleCityChange} />
          </label>
        </li>
        <li>
          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
        </li>
        <li>
          <label>
            Email Address:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
        </li>
      </ul>
      <button type="submit">Request Design Consultation</button>
    </form>
  );
}
