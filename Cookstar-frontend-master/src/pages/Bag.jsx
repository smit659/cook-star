import React, {useContext} from 'react'
import {AppContext} from '../context'
import FavCard from '../components/FavCard'
import '../css/Bag.css'

function Bag() {
    const {bagItems,setbagItems} = useContext(AppContext);
    return (
        <section className="bag-section">
            <h1 className="bag-title">Your Favourite Recipes</h1>
            <div className="bag-cards-section">
            {
                bagItems.map((recipes,index)=>{
                   return <FavCard key={index} id={index} link={recipes.recipe.url} info={recipes.recipe.mealType} title={recipes.recipe.label} img={recipes.recipe.image}/>
                })
            }
            </div>
        </section>
    )
}

export default Bag
