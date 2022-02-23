import React from "react";
import {Link} from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useContext } from "react";
import Carousel from 'react-elastic-carousel';
import Cards from './Cards';
import Trend from './Trend'
// import '../css/FrontPage.css';
import axios from "axios";
import { AppContext } from '../context';

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]

const List = ({ name,routes}) => {
  const [userData,setUserData] = useState([]);
  const {likeValue} = useContext(AppContext);
  let carouselUserData,carouselUserDataTrending;
  React.useEffect(()=>{
      async function fetches() {
      await axios.get('https://cookstar.herokuapp.com/userRecipe').then((result)=>{
        setUserData(result.data);
        console.log(userData);
        
      }).catch((err)=>alert(err));
    }
    fetches();
  },[likeValue]);

  carouselUserData = userData.slice(0,7);
  
  return (
    <div className="home-list-div">
      <div className="explore-container">
        <h2 className="home-list-title" style={{color:'black'}}>{name}</h2>
        {name === "User's Recipes" && <Link to={routes} className="explore">All Recipes of users </Link>}
      </div>
        {name === "User's Recipes" ?
              <Carousel breakPoints={breakPoints}>
                {carouselUserData.map((item,i)=>( 
                  <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
                ))}
              </Carousel> : 
              <Trend/>
              // <Carousel breakPoints={breakPoints}>
              //   {carouselUserData.map((item,i)=>( 
              //     <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
              //   ))}
              // </Carousel>
        }
    </div>
  );
};
export default List;
