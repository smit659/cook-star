import React,{useEffect,useState,useContext} from 'react'; 
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
import {FaRegBookmark} from 'react-icons/fa';
import '../css/Detail.css';
import {Button} from "@mui/material";
import { LOADIPHLPAPI } from 'dns';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {userContext} from '../App'
import { AppContext } from '../context';

export default function Detail() {
    const {id} = useParams();
    const [datas,setDatas] = useState();
    // const [userDetail,setUserDetail] = useState();
    
    const {bookmarkHandler,unBookmarkHandler,value} = useContext(AppContext);
    const m = localStorage.getItem('email');

    useEffect(()=>{
          function fetcher(){
             axios.get('https://cookstar.herokuapp.com/userRecipeClick/',{params:{ids:id}}).then((response)=>{
                console.log(response.data[0].image);
                setDatas(response.data);
            }).catch((err)=>alert('hih'));
        }
        fetcher();
    },[value]);
    
    console.log(datas);
    return (
        <div className="detail-section">
            <div className="save-container">
               {datas && (datas[0].bookmark.includes(m) ? <Button><i class="fas fa-bookmark" onClick={()=>unBookmarkHandler(id)}></i></Button> : <Button><i class="far fa-bookmark" onClick={()=>bookmarkHandler(id)}></i></Button>)}
                <div className="time-border"></div>
            </div>
            <div className="recipeimg-container">
               {datas && <img src={datas[0].image} alt=""/>}
            </div>
            <div className="recipe-user-name-container">
                {datas && <h2>{datas[0].recipetitle}</h2>}
                {datas && <Link to={`/users/info/${datas[0].email}`}>
                    <div className="user-name-cont">
                        {datas && <div className="user-avt">{datas[0].username.slice(0,1)}</div>}
                        <div className="username-cont">
                            {datas && <div className="useravtar">{datas[0].username}</div>}
                        </div>
                    </div>
                </Link>}
            </div>
            <div className="time-border"></div>
            <div className="time-cont">
                <p><AiOutlineClockCircle /></p>
                <span><p style={{paddingLeft:'5px'}}>{datas && datas[0].cooktime}</p></span>
            </div>
            <div className="time-border"></div>
            <div className="ingredients-container">
                <h2 style={{margin:'20px 0 13px 0'}}>Ingridents</h2>
                <div className="serve-container">
                    <BiUser />
                    <p>{datas && datas[0].serves} people</p>
                </div>
                {
                    datas && datas[0].ingrid.map((ingr)=>(
                        <p>{ingr}</p>
                    ))
                }
            </div>
            <div className="steps-container">
                <h2>Steps</h2>
                <ol type="1" style={{padding:'15px'}}>
                    {
                        datas && datas[0].steps.map((step,i)=>(
                            <li>{step}</li>
                        ))
                    }
                </ol>
            </div>
            <div className="time-border"></div>
                <div className="allrecipe-btn-container">
                    {datas && <button>            <Link to={`/users/info/${datas[0].email}`} className="recipe-btn">All Recipes of {datas && datas[0].username}</Link></button>}
                </div>
        </div>
    )


//         <div style={{backgroundColor:'gainsboro'}}>
// <div className="shadow" style={{backgroundColor:'#EBE3E3', borderRadius:'50px',margin:'20px auto',padding:'30px 50px',width:'77%',color:'tomato',fontWeight:'bold'}}>
// {datas.map((itemss,i) =>( 
//     <div>
//     <div className="detail-container"  key={i} >
       
//         <img className="detail-img" src ={itemss.image}/>
//     <div><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Recipe Name</h1><div style={{textAlign:'center'}}>{itemss.recipetitle}</div></div>
      
//            <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Description</h1><div style={{textAlign:'center'}}> {itemss.recipeContent}</div>
//            </div>
         
          
//             <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Origin</h1><div style={{textAlign:'center'}}> {itemss.recipeOrigin}</div>
//            </div>
//            <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Serving</h1><div style={{textAlign:'center'}}> {itemss.serves}</div>
//            </div>
//            <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Cooking time</h1><div style={{textAlign:'center'}}> {itemss.cooktime}</div>
//            </div>
//            <div><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Click To See More Recipe Of &nbsp; '{itemss.username}'</h1><div style={{textAlign:'center'}} > <Link to={`/users/info/${itemss.email}`}>  <button style={{padding:'7px'}}>  {itemss.email}</button></Link></div></div>
//            <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Ingridents</h1>
//             </div>
//          <div style={{textAlign:'center'}}>  {(itemss.ingrid).map((items,is)=>(<h4><li >{items}</li></h4>))} </div>
           
           
//          <div ><h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'10px',color:'black'}}>Steps</h1>
//             </div>
          
//           <div style={{textAlign:'justify'}}> {(itemss.steps).map((items,is)=>(<h4 style={{margin:'10px'}}><hr/><li>{items}</li></h4>))}</div>
//            </div>
//   </div>))}
//   </div>
//   </div> 
}
