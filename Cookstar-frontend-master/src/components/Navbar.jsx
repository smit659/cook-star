import React,{useContext} from 'react';
import "../css/Navbar.css";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import our_logo from '../Images/logo.jpeg'

import {userContext} from '../App';
const Navbar = () => {
const {state,dispatch}=useContext(userContext);
let history=useHistory();

    return (
        <div>
            <nav className="navbar" >
         
<div className="nav-left">
<div className="img-logo">
<Link to="/">
<img className="nav-logo"
            src={our_logo}
            alt="logo"
          />
</Link>
</div>
<Link className="logo-link" to="/">
<div style={{textDecoration:'none'}} className="nav-logo-name">
{/* <img src={our_logo} alt="our logo"/> */}
<p className="logo-start"><span>C</span>ook<span>S</span>tar</p>

</div>
</Link>
<div className="nav-left-content create-recipe"><Link to="/create" className="create signup-link" href="#"><i class="fas fa-utensils"></i>  <span className="name-links-nav">Create</span></Link></div>

  {/* {state ?  <span></span> : <div className="nav-left-content  sign-up"><Link to="/register" className=" create signup-link" href="#"><i class="fas fa-sign-in-alt"></i> <span className="name-links-nav">Sign Up</span></Link></div>} */}
</div>
<div className="nav-right">
    <div className="active"></div>
    <div className="Home nav-links"> <Link to="/"className="nav-links" href="#"><i class="fas fa-home"></i> <span className="name-links-nav">Home</span></Link></div>
    <div className="About nav-links"> <Link to="/about" className="nav-links" href="#"><i class="fas fa-address-card"></i> <span className="name-links-nav">About</span></Link></div>
    <div className="fav nav-links"> <Link to="/me" className="nav-links" href="#"><i class="fas fa-user-tie"></i> <span className="name-links-nav">Me</span></Link></div>
    
  {state ? <span></span> :  <div className="Login nav-links"> <Link to="/login" className="nav-links" href="#"><i class="fas fa-sign-in-alt"></i> <span className="name-links-nav">Login</span></Link></div>}
  {state &&  <button onClick={()=>{  dispatch({type:'USER',payload:false});localStorage.clear()}} className="Login nav-links"> <Link to="/"   className="nav-links" href="#"><i class="fas fa-sign-in-alt"></i> <span className="name-links-nav">Logout</span></Link></button>}

  {/* {state ? <span></span> :  <div className="responsive-header-nav"> <Link to="/register" className="signup-link-res" href="#">Sign up</Link></div>} */}
  {state ? <span></span> :    <div className="responsive-header-nav"> <Link to="/login" className="login-link-res" href="#">Login</Link></div>}
  {state &&  <div onClick={()=>{  dispatch({type:'USER',payload:false});localStorage.clear();history.push('/')}} className="responsive-header-nav"> <Link to="/login" className="login-link-res" href="#">Logout</Link></div>}

</div>
            </nav>
        </div>
    );
}

export default Navbar;
