// import React, { useState, useContext } from "react";
// import "../css/Login.css";
// import axios from "axios";
// import { useHistory,Link } from "react-router-dom";
// import { userContext } from "../App";
// import { Redirect } from "react-router";

// var flag = 1;
// const Login = () => {
//   const { state, dispatch } = useContext(userContext);
//   let history = useHistory();
//   const [datas, setDatas] = useState({
//     email: "",
//     password: "",
//   });

//   const handlesubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:3001/login", datas)
//       .then((response) => {
//         console.log(response.data);
//         dispatch({ type: "USER", payload: true });
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("username", response.data.username);

//         history.push("/");
//       })
//       .catch((err) => {
//         alert("Invalid Username & Password");
//       });
//   };

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setDatas((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };
//   return (
//     <>
//       <div className="login-main-div">
//         <div className="login-box">
//           <h1>Login</h1>
//           <form method="post" action="/login" onSubmit={handlesubmit}>
//             <div className="login-inputBox">
//               <input
//                 id="email"
//                 name="email"
//                 required
//                 autocomplete="off"
//                 type="email"
//                 onChange={handlechange}
//               />
//               <label for="email">Email</label>
//             </div>
//             <div className="login-inputBox">
//               <input
//                 name="password"
//                 id="password"
//                 required
//                 autocomplete="off"
//                 type="password"
//                 onChange={handlechange}
//               />
//               <label for="password">Password</label>
//             </div>
//             <button type="submit" className="submit-btn">
//               Login
//             </button>
//             <br/>

// <h2 style={{textAlign:'center',marginTop:'10px',color:'grey'}}></h2>
// <br/>

//         <div className="signup">
//           <span>Not a member yet? </span>
//           <Link to="/register">Sign Up Here!</Link>
//         </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import "../css/Login.css";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import { userContext } from "../App";
import { Redirect } from "react-router";
const Login = () => {
  const { state, dispatch } = useContext(userContext);
  let history = useHistory();
  const [datas, setDatas] = useState({
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", datas)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "USER", payload: true });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email",response.data.email);
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

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
    <>
      <div className="login-main-div">
    
        <div style={{backgroundColor:'#FFFFFF'}} className="login-box">
          <h1>Login</h1>
          <form method="post" action="/login" onSubmit={handlesubmit}>
            <div className="login-inputBox">
              <input
                id="email"
                name="email"
                required
                autocomplete="off"
                type="email"
                onChange={handlechange}
              />
              <label for="email">Email</label>
            </div>
            <div className="login-inputBox">
              <input
                name="password"
                id="password"
                required
                autocomplete="off"
                type="password"
                onChange={handlechange}
              />
              <label for="password">Password</label>
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <br/>

<h2 style={{textAlign:'center',marginTop:'10px',color:'grey'}}></h2>
<br/>

        <div className="signup">
          <span style={{color:'black'}}>Not a member yet? </span>
          <Link to="/register">Sign Up Here!</Link>
        </div>
          </form>
        </div>

     
      </div>
    </>
  );
};

export default Login;
