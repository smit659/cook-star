import React,{useState,useEffect} from 'react'
import { MdLocalFlorist, MdSystemUpdate } from 'react-icons/md';
import '../css/EditProfile.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function EditProfile() {
    const history = useHistory();
    const x=localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${x}` }
    };  

    const [inputs,setInputs] = useState({
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        location: '',
        bio: '',
        id: '',
        old_email: localStorage.getItem('email')
    })
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setInputs((item)=>{
            return {...item,[name]:value}
        })
    }
    useEffect(()=>{
        axios.post('https://cookstar.herokuapp.com/getUser',inputs).then((response)=>{
            setInputs({...inputs,id:response.data[0]._id});
        }).catch((err)=>{alert(err)});
        // axios.post('http://localhost:3001/me',inputs,config).then((response)=>{
        //     console.log(response.data[0]);
        // }).catch((err)=>{alert(err)});
    },[]);

    const clickHandler = (e) => {
        e.preventDefault();
        axios.patch('https://cookstar.herokuapp.com/updateProfile',inputs).then((response)=>{
            console.log(response.data);
            alert('Your profile is successfully updated');
            // localStorage.setItem('username',inputs.username);
            // localStorage.setItem('email',inputs.email)
            localStorage.setItem('bio',inputs.bio);
            history.push('/login');
        }).catch((err)=>{alert('Email already exists..')});
    }

    return (
        <div className="edit-section">
            <div className="myprofile-container edit-profile">
                <div className="profile-info">
                    <div className="avtar-container">{localStorage.getItem('username').substring(0,1)}</div>
                    <h2>{localStorage.getItem('username')}</h2>
                </div>
            </div>
            <div className="edit-form-container">
                <form method="patch" action="/updateProfile" className="edit-form" onSubmit={clickHandler}>
                    <div className="edit-input-container">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="username"
                            onChange={changeHandler}
                            value={inputs.username}
                            
                        />
                    </div>
                    <div className="edit-input-container">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            onChange={changeHandler}
                            value={inputs.email}
                            
                        />
                    </div>
                    <div className="edit-input-container">
                        <label>Location</label>
                        <input 
                            type="text"
                            name="location"
                            onChange={changeHandler}
                            value={inputs.location}
                            placeholder="Location"
                        />
                    </div>
                    <div className="edit-input-container">
                        <label>About you and your love of cooking</label>
                        <input 
                            type="text"
                            name="bio"
                            onChange={changeHandler}
                            value={inputs.bio}
                            placeholder="Bio"
                        />
                    </div>
                        <button type="submit" className="edit-form-buttons update-btn-1">Update</button>
                </form>
                <button className="edit-form-buttons cancel-btn-1" onClick={()=>history.push('/me')}>Cancel</button>
            </div>
        </div>
    )
}

export default EditProfile
