import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [datas, setDatas] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    location: "",
    bio: ""
  });
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log((datas.username).length);
    if((datas.username).length>7){
      alert('username length exceeded ')  ;
      return ;
    }
    
    var newPassword = datas.password;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
      alert("password length must be between 6-16 characters");
      return ;
    }
    if(!regularExpression.test(newPassword)) {
      alert("password should contain atleast one number and one special character");
      return ;
    }
    axios.post('https://cookstar.herokuapp.com/register',datas).then((response)=>{
        alert('Successfully Registered');
        history.push('/login');
    }).catch(err=>{alert(err)});  
  }
      
  const handlechange = (e) => {
    const { name, value } = e.target;
    setDatas((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="login-main-div">
     
      <div className="login-box" style={{backgroundColor:'#FFFFFF'}}>
        <h1>Register</h1>
        <form method="post" action="/register" onSubmit={handlesubmit}>
          <div className="login-inputBox">
            <input
              id="username"
              name="username"
              value={datas.username}
              required
              autocomplete="off"
              type="text"
              onChange={handlechange}
            />
            <label for="username">Username:</label>
          </div>
          <div className="login-inputBox">
            <input
              id="login"
              name="email"
              value={datas.email}
              required
              autocomplete="off"
              type="email"
              onChange={handlechange}
            />
            <label for="login">email:</label>
            {/* <span id="errEmail">This Email Already Exists.</span> */}
          </div>
          <div className="login-inputBox">
            <input
              id="password"
              name="password"
              value={datas.password}
              required
              autocomplete="off"
              type="password"
              onChange={handlechange}
            />
            <label for="password">Password:</label>
          </div>
          <div className="login-inputBox">
            <input
              id="cpassword"
              name="cpassword"
              value={datas.cpassword}
              required
              autocomplete="off"
              type="password"
              onChange={handlechange}
            />
            <label for="location">Confirm Password:</label>
          </div>
          <div className="login-inputBox">
            <input
              id="location"
              name="location"
              value={datas.location}
              required
              autocomplete="off"
              type="text"
              onChange={handlechange}
            />
            <label for="bio">Location:</label>
          </div>
          <div className="login-inputBox">
            <input
              id="bio"
              name="bio"
              value={datas.bio}
              required
              autocomplete="off"
              type="text"
              onChange={handlechange}
            />
            <label for="bio">Bio:</label>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    
    </div>
  );
};

export default Register;