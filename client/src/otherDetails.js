// import React from 'react'

// export default function OtherDetails() {
//   return (
//     <div className='content-center'>
//       <h6>Others details page</h6>
//     </div>
//   )
// }

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function OtherDetails() {
    const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [date , setDate] = useState("");
  const [number , setNumber] = useState("")
    const [errMsg, setErrMsg] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
axios.post("http://localhost:3001/Login",{age: age, gender: gender, date: date,number: number})
.then((response) => {
  navigate ("/")
console.log(response)

}).catch(err => {console.log(err)

});
  };

  return (
    <div className="login-container">
      <h2>User details</h2>
      <div style={{position:"absolute", top:10, left:"50%"}}>
            {errMsg}
      </div>
      <form >
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          autoComplete="off"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          
          aria-describedby="uidnote"
        />
        <label htmlFor="gender">Gender:</label>
        {/* <label>Male</label>
<label>Female</label> */}
        <input
          type="text"
          id="gender"
          autoComplete="off"
          onChange={(e) => setGender(e.target.value)}
          value={gender}

        />
        
        <label htmlFor="date">DOB:</label>
        <input
          type="date"
          id="date"
          autoComplete="off"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          
        />

<label htmlFor="number">Mobile Number:</label>
        <input
          type="number"
          id="number"
          autoComplete="off"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          
        />



        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default OtherDetails;

