import React from "react";
import {Link} from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useContext } from "react";
import Carousel from 'react-elastic-carousel';
import Cards from './Cards';
import { useHistory } from "react-router-dom";
// import '../css/FrontPage.css';
import { Button } from "@mui/material";
import axios from "axios";
import { AppContext } from "../context";

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]



const Trend = ({ name,routes}) => {
  const [userData,setUserData] = useState([]);
 const [liker,setlike] = useState(0);
 const [value, setValue] = useState(0); // integer state
 const {setLikeValue,likeValue} = useContext(AppContext);

  const x = localStorage.getItem("token");
    const m=localStorage.getItem("email");
    // const j={email:m,id:props.id};
    let history = useHistory();
    const config = {
      headers: { Authorization: `Bearer ${x}` }
    };
  React.useEffect(()=>{
      async function fetches() {
    await axios.get('https://cookstar.herokuapp.com/userRecipe').then((result)=>{  result.data.sort( compare );
      //   .sort(function(a,b){return a.like.length<b.like.length});
        setUserData(result.data);
        console.log(userData);}).catch((err)=>{alert(err);});

      function compare( a, b ) {
        if ( a.like.length< b.like.length ){
          return 1;
        }
        if (a.like.length> b.like.length  ){
          return -1;
        }
        return 0;
      }
    
    
    }
    fetches();
  },[likeValue]);

  const carouselUserData = userData.slice(0,7);

  return (
      <Carousel breakPoints={breakPoints}>
        {
          carouselUserData.map((item,i)=>{
        
            return(
                <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>

           
                       
// {/* <div key={i} className="main-card home-cards">
//           <div className="card-side">
//           {/* <h1 style={{textAlign: 'center'}}> <span style={{fontFamily: 'Ephesis'}}>By ~{props.username}</span> </h1> */}
//               <div className="img-container">
//                   <img src={props.image} alt="food image"/>
//               </div>
//               <div className="card-info-container">
//                   <div className="card-info">
//                       <h3>{props.recipetitle}</h3>
//                       {props.like.includes(m) ? <Button style={{margin:'4px 4px'}} > <i style={{color: 'red',fontSize: '24px'}} onClick={(property)=>{ if (property.target.style.color == "red" || props.like.includes(m)) {

//         // property.target.style.color="black";
//         axios.put("http://localhost:3001/recipeData/dislike",{email:m,id:props._id} ,config)
//         .then((res) => {
      
//         //   window.location.reload();
//           setLikeValue(likeValue+1);
//         }
//         )
//         .catch((err) => {
          
            
//           alert("Unauthorized!! Login  First"+err);
//           // property.target.style.color="black";
//           // history.push("/login");
//         });
//     }
//     else {
//       console.log("ss"+props.like.includes(m));
//         // property.target.style.color = "red";

//         axios.put("http://localhost:3001/recipeData/like",{email:m,id:props._id} ,config)
//         .then((res) => {
//         //   window.location.reload();
//         setLikeValue(likeValue+1);
//         })
//         .catch((err) => {
          
            
//           alert("Unauthorized!! Login  First"+err);
//           property.target.style.color="black";
//           // history.push("/login");
//         });
//     }}
//     } class="fas fa-heart fa-white"></i>  <h3 style={{marginTop:'4px'}}>{props.like.length}</h3></Button>
//   : <Button style={{margin:'4px 4px'}} > <i style={{color: 'black',fontSize: '24px'}} onClick={(property)=>{ if (property.target.style.color == "red" || props.like.includes(m)) {
//         // property.target.style.color="black";
//         axios.put("http://localhost:3001/recipeData/dislike",{email:m,id:props._id} ,config)
//         .then((res) => {
//         //   window.location.reload();
//         setLikeValue(likeValue+1);
//         })
//         .catch((err) => {
          
            
//           alert("Unauthorized!! Login  First"+err);
//           property.target.style.color="black";
//           // history.push("/login");
//         });
//     }
//     else {
//       console.log("ss"+props.like.includes(m));
//         // property.target.style.color = "red";

//         axios.put("http://localhost:3001/recipeData/like",{email:m,id:props._id} ,config)
//         .then((res) => {
//         //   window.location.reload();
//         setLikeValue(likeValue+1);
        
//         })
//         .catch((err) => {
          
            
//           alert("Unauthorized!! Login  First"+err);
//           // property.target.style.color="black";
//           // history.push("/login");
//         });
//     }}} class="fas fa-heart fa-white"></i><h3 style={{marginTop:'4px'}}>{props.like.length}</h3></Button>
//      }

                     
//                   </div>
//                   <p style={{fontSize:'20px',padding:'0 15px'}}> <span style={{fontFamily: 'Ephesis'}}>{props.username}</span> </p>

//           <Link to={`/users/${props._id}`} className="recipe-btn">View More</Link>
//               </div>
//           </div>
//         </div>      */}
               

                )
          })
        }
      </Carousel>
  );
};
export default Trend;