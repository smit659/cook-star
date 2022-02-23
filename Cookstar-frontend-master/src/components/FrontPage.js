import React,{useEffect} from "react";
import List from "./List";
import axios from 'axios'
import {Link} from 'react-router-dom';
import "../css/FrontPage.css";
import banner_img from '../Images/recipe-banner.png'; 

const Home = () => {
  // CHECKING BACKEND CONNECTION
  // useEffect(()=>{

  // },[Trend]);
  
  return (
      <>
    <div className="whole-page">
      <div className="home-info">
      
        <section>
        <div className="home-image-container"> 
          <img src={banner_img} alt=""/>
        </div>
        <section  className="home-intro-container">
        <p  className="logo-start-home">Cookstar</p>
        <Link to="/search" className="home-search-btn" >Search Recipes</Link>

          <h1 className="intro-head">Cook Your meal with CookStar</h1>
          <p className="intro-para">
          Explore or Create new and delicious recipes & make your food more appealing.
          </p>

        </section>
        </section>
      </div>
      <div>
        <br></br>
        <br></br>
        <List name="User's Recipes" routes="/users"/>

        {/* <div className="home-list-div">
          <h2>Seasonal Recipes</h2>
        </div> */}
        {/* <List name="Recent Recipes" /> */}

        <List  name="Trending Recipes" />
      </div>
    </div>

    </>
  );
};

export default Home;

