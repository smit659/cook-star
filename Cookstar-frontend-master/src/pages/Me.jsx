import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {userContext} from '../App'
import Cards from '../components/Cards';
import Card from '../components/Card';
import { useHistory,Link } from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa'
import {FaRegEdit} from 'react-icons/fa'
import '../css/Me.css'
import { AppContext } from '../context';

function Me() {
    let history=useHistory();
    const {likeValue} = useContext(AppContext);
    const x=localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${x}` }
    };  

    const [res,setRes] = useState([]);
    const [saved,setSaved] =useState(false);
    const [myrecipe,setMyRecipe] = useState(true);
    const [resi,setResi] = useState();
    const [bag,setBag] = useState();

    const toggleSavedRecipe = () => {
        setSaved(true);
        setMyRecipe(false);
    }
    const toggleMyRecipe = () => {
        setSaved(false);
        setMyRecipe(true);
    }
    useEffect(()=>{
        async function getBookmark(){
            await axios.get('https://cookstar.herokuapp.com/userRecipe').then((response)=>{
                setResi(response.data);
            }).catch((err)=>alert(err));
        }
        getBookmark();
        async function fetcher(){
            await axios.get('https://cookstar.herokuapp.com/me',config).then(res=>{
                console.log(res.data); setRes(res.data)}).catch(err=>{alert('Unauthorized !! Please Login ');
                history.push('/login');});
            }
            fetcher();
        // console.log(bag);
        // console.log(resi);
    },[likeValue]);
    useEffect(()=>{
        resi && setBag(resi.filter((item)=>{
            if(item.bookmark.includes(localStorage.getItem('email'))){
                return item;
            }
        }));
    },[resi,likeValue]); 
    
    // const savedCount = bagItems.length + bagItemsUsers.length;
    return (
        <div className="me-section">
            <div className="myprofile-container">
                <div className="profile-info">
                <div className="avtar-container">{localStorage.getItem('username')?localStorage.getItem('username').substring(0,1):<></>}  </div>
                    <h2>{localStorage.getItem('username')?localStorage.getItem('username'):<></>}</h2>
                    <Link to="/updateProfile"><button className="edit-btn"><FaRegEdit/></button></Link>
                </div>
                <div className="saved-myrecipes-container">
                    <ul>
                        <li className={myrecipe ? "border-bottom" : ""}><a  onClick={toggleMyRecipe}>My Recipes</a></li>
                        <li className={saved ? "border-bottom" : ""}><a  onClick={toggleSavedRecipe}>Saved <span></span></a></li>
                    </ul>
                </div>
            </div>
            {/* {state &&<h1 style={{fontFamily: 'Ephesis',textAlign:'center',margin:'40px'}}> {localStorage.getItem('username')} 's All Recipes</h1>} */}

            {
                myrecipe && <div className="cards-section cards-section-myrecipes">
                {res.map((item,i)=>( 
                    <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
                ))}
            </div>
            }

            {
                saved && <div className="cards-section cards-section-saved">
                    {bag && bag.length==0 && <div className="saved-recipe-content">
                        You can find your saved recipes here.
                    </div>}

                    {/* {bagItems.map((item,i)=>(
                        <Card key={i} id={i} link={item.recipe.url} info={item.recipe.mealType} title={item.recipe.label} img={item.recipe.image} cuisineType={item.recipe.cuisineType}/>
                    ))} */}

                    {bag && bag.map((item,i)=>{
                        return <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
                    })}
                </div>
            }
                        
        </div>
    )
}

export default Me