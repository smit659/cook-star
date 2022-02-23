import React,{useState,useEffect} from 'react'
import {useParams,Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import Cards from '../components/Cards';
import {FaRegHeart} from 'react-icons/fa';
import '../css/UserProfile.css';

function UserProfile() {
    const x = localStorage.getItem("token");
    const name = localStorage.getItem('username');
    const config = {
        headers: { Authorization: `Bearer ${x}` },
      };
      let history=useHistory();

    const {email}=useParams();
    const [datas,setDatas] = useState([]);
    async function fetcher(){
      await axios.get('https://cookstar.herokuapp.com/info',{params:{emails:email}}).then((result)=>{console.log(result.data)  ; setDatas(result.data);}).catch(err=>{alert('Unauthorized-- ! Login First');history.push('/login')}); 
    }
  useEffect(()=>{
      console.log(email);
      fetcher();
  },[]);
  
  return (
    <div className="userprofile-container">

      <h1 style={{fontFamily: 'Ephesis',textAlign:'center',padding:'40px'}}>HIS/HER All Recipes</h1>

      <div className="cards-section">

      {datas.map((item,i)=>( 
          <Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>
        ))}

      </div>
    </div>
  )
}

export default UserProfile