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

  