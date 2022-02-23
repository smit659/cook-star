import React,{useContext,useState} from "react";
import {Link} from 'react-router-dom'
import { AppContext } from "../context";
import {FaRegHeart} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa';
import {FaRegBookmark} from 'react-icons/fa';
import {Button} from "@mui/material";
import axios from "axios";

const Cards = (props) => {
    const {setLikeValue,likeValue} = useContext(AppContext);
    const [value,setValue] = useState(0);

    const m=localStorage.getItem("email");
    const x = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${x}` }
      };

    const unlikeHandler = () => {
      axios.put("http://localhost:3001/recipeData/dislike",{email:m,id:props.id} ,config)
        .then((res) => {
            setLikeValue(likeValue + 1);
        })
        .catch((err) => {
          alert("Unauthorized!! Login! First"+err);
          // history.push("/login");
        });
    }
    const likeHandler = () => {
      axios.put("http://localhost:3001/recipeData/like",{email:m,id:props.id} ,config)
        .then((res) => {
          setLikeValue(likeValue + 1);
        })
        .catch((err) => {  
          alert("Unauthorized!! Login--First"+err);
          // history.push("/login");
        });
    }

    return (
        <div className="main-card home-cards">
          <div className="card-side">
            <div className="img-container">
              <img src={props.img} alt="food image"/>
            </div>
            <div className="card-info-container">
              <div className="card-info">
                <h3>{props.title.length>15 ? `${props.title.substring(0,12)}...` : props.title}</h3>
                  {props.like.includes(m) ? <button className="like-btn"> <i style={{color: 'red',fontSize: '22px'}} onClick={unlikeHandler} class="fas fa-thin fa-heart"></i>  
                  <h3 style={{marginTop:'4px'}}>{props.like.length}</h3></button> : 
                  <button className="like-btn"> <i style={{fontSize: '22px'}} onClick={likeHandler} class="fas fa-thin fa-heart"></i><h3 style={{marginTop:'4px'}}>{props.like.length}</h3></button>}
              </div>
              <p style={{fontSize:'20px',padding:'0 15px'}}> <span style={{fontFamily: 'Ephesis'}}>{props.username}</span> </p>
            </div>
            <Link to={`/users/${props.id}`} className="recipe-btn">View More</Link>
          </div>
        </div>      
  );
};

export default Cards;
