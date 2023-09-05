import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
    const [errMsg, setErrMsg] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
axios.post("http://localhost:3001/signin",{name: username, email:email,password: password})
.then((response) => {
console.log(response)
if(response.data === "Success"){
    navigate('/details')
} else {
    setTimeout(()=>{
        setErrMsg("") 
    },3000)
    setErrMsg(response.data)
} 
}).catch(err => {console.log(err)

});
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div style={{position:"absolute", top:10, left:"50%"}}>
            {errMsg}
      </div>
      <form >
        {/* <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          
          aria-describedby="uidnote"
        /> */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default SignIn;
