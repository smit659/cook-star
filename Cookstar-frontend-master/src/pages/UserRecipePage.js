import React,{useState,useEffect,useContext} from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa';
import Cards from '../components/Cards';
import '../css/UserRecipePage.css';
import bannerImage from '../Images/main-banner.jpg';
import { AppContext } from '../context';

function UserRecipePage() {
    let history = useHistory();
    const {likeValue} = useContext(AppContext);
    const [res,setRes]=useState([]);
    useEffect(()=>{
       async function fetches(){
            let result=await axios.get('https://cookstar.herokuapp.com/userRecipe');
            let y=result.data;
            setRes(y);
       }
       fetches();
    },[likeValue]);

    return (
        <div className="user-recipe-page">
            <h1 style={{textAlign:'center',margin:'40px'}}>Our Chef's Recipes</h1>
            <div className="cards-section">
                {res.map((item,i)=>( 
                    <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
                ))}
            </div>
        </div>
    )
}

export default UserRecipePage;
