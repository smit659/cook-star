import React from 'react';
import "../css/Footer.css";
import {Link} from 'react-router-dom';
let date=new Date().getFullYear();
console.log(date);
const Footer = () => {
    return (
        <div className="footer" style={{backgroundColor:'#FFFFFF',boxShadow: '10px 4px 10px 4px rgb(0 0 0 / 50%)' ,color:'#333333'}}>

          <div className="footer-nav" style={{marginBottom:'-1px'}}>
          <h3 style={{width:'100%',textAlign:'center',color:'#333333' }} className="footer-text">Copyright &copy; 2021-{date} Cook-Star Inc. All rights Reserved</h3> 

          <div  className="Home foo-nav "> <Link to="/" className="foo-navs" href="#"><i style={{color:'#333333',marginTop:'-8px'}} class="fas fa-home"></i> <p style={{color:'#333333',marginBottom:'-1px',marginTop:'10px'}} className="name-links-nav-footer">Home</p></Link></div>
          <div className="Home foo-nav "> <Link to="/search" className="foo-navs" href="#"><i style={{color:'#333333',marginTop:'-8px'}} class="fas fa-search"></i> <p  style={{color:'#333333',marginTop:'10px'}}className="name-links-nav-footer">Search</p></Link></div>
          <div className="Home foo-nav "> <Link to="/create" className="foo-navs" href="#"><i style={{color:'#333333',marginTop:'-8px'}} class="fas fa-utensils"></i> <p style={{color:'#333333',marginTop:'10px'}} className="name-links-nav-footer">Create</p></Link></div>
          <div className="Home foo-nav "> <Link to="/me" className="foo-navs" href="#"><i style={{color:'#333333',marginTop:'-8px'}} class="fas fa-user-tie"></i> <p style={{color:'#333333',marginBottom:'-1px',marginTop:'10px'}} className="name-links-nav-footer">Profile</p></Link></div>

          </div> 
        </div>
    );
}

export default Footer;