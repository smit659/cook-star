import React, {useContext} from 'react';
import {FaRegHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {AppContext} from '../context'

function FavCard(props) {
    const {counterFunc, fav_btn} = useContext(AppContext);

    return (
        <div className="fav-card">
            <div className="fav-img-container">
                <img src={props.img} alt="food image" />
            </div>
            <div className="fav-card-info">
                <h3>{props.title}</h3>
                <button className="fav-btn" ref={fav_btn} onClick={()=>counterFunc(props.title, fav_btn)}><FaRegHeart/></button>
            </div>
            <p>{props.info}</p>
            <Link to={`/item/${props.title}`} className="recipe-btn">View More</Link>
        </div>
    )
}

export default FavCard
