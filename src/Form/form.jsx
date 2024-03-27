"use client";
import React, { useReducer } from "react";

export default function Form() {
  const initState = {
    data: {
      fullName: "",
      postcode: "",
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
      <div>
        <label>Full Name: </label>
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
        />
        <label>Post Code: </label>
        <input
          type="text"
          name="postcode"
          value={state.postcode}
          onChange={handleChange}
        />
        {/* Add other input fields similarly */}
      </div>
    );
  }

  return <ContactForm />;
}









//   return (
//     <div className="form">
//       <form>
//         <ul>
//           <li>
//             <label>Full Name: </label>
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>Post Code: </label>
//             <input
//               type="text"
//               value={postCode}
//               onChange={(e) => setPostcode(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>House Number: </label>
//             <input
//               type="text"
//               value={houseNumber}
//               onChange={(e) => setHouseNumber(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>Street Name: </label>
//             <input
//               type="text"
//               value={streetName}
//               onChange={(e) => setStreetName(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>City: </label>
//             <input
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>Phone Number: </label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </li>
//           <li>
//             <label>Email Address: </label>
//             <input
//               type="email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </li>

//           <li>
//             <button>Request Design Consultation</button>
//           </li>
//           {fullName}
//         </ul>
//       </form>
//     </div>
//   );
// }

