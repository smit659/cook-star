import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AppContext = React.createContext();

const ContextAPI = ({children})=>{
    const [result,setResult]=useState([]);
    const [userRecipes,setUserRecipes] = useState([]);
    const [value,setValue] = useState(0);
    const [likeValue,setLikeValue] = useState(0);

    const m = localStorage.getItem("email");
    const x = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${x}` }
      };

    useEffect(()=>{
        async function fetches(){
            const result = await axios.get('https://cookstar.herokuapp.com/userRecipe');
            setUserRecipes(result.data);
        }
        fetches();
    },[]);
    
    
    
    // const counterFunc = (name,fav_btn)=>{
    //     result.map((recipes)=>{
    //         if(recipes.recipe.label === name){
    //             if(recipes.recipe.yield > 0){
    //                 //fav_btn.current.style.color = 'red';
    //                 //setBtnName('Remove From Favourites');
    //                 bagItems.push(recipes);
    //                 setbagItems(bagItems);
    //                 recipes.recipe.yield = -1;
    //             }
    //             else{
    //                 //fav_btn.current.style.color = 'black';
    //                 //setBtnName('Add To Favourite');
    //                 recipes.recipe.yield = 1;
    //                 setbagItems(bagItems.filter((items)=>{
    //                     if(items!==recipes){
    //                         return items;
    //                     }
    //                 }));
    //             }
    //         }
    //         return recipes;
    //     })
    // }
    // const bookmarkHandler = (id,bookmark_btn) => {
    //     userRecipes.map((recipe)=>{
    //         setFillBookmark(!fillBookmark);
            
    //         if(recipe._id===id){
    //             if(recipe.temp_id > 0){
    //                 bagItemsUsers.push(recipe);
    //                 setBagItemsUsers(bagItemsUsers);
    //                 recipe.temp_id*=-1;
    //             }
    //             else{ 
    //                 recipe.temp_id*=-1;
    //                 setBagItemsUsers(bagItemsUsers.filter((item)=>{
    //                     if(recipe!==item){
    //                         return item;
    //                     }
    //                 }))
    //             }
    //         }
    //         return recipe;
    //     })
    // }

    const unBookmarkHandler = (id) => {
        axios.put("https://cookstar.herokuapp.com/recipeData/unbookmark",{email:m,id:id} ,config)
        .then((res) => {
            setValue(value + 1);
        })
        .catch((err) => {
          alert("Unauthorized!! Login! First"+err);
        });
    }
    const bookmarkHandler = (id) => {       
        axios.put("https://cookstar.herokuapp.com/recipeData/bookmark",{email:m,id:id} ,config)
        .then((res) => {
            setValue(value + 1);
        })
        .catch((err) => {
          alert("Unauthorized!! Login! First"+err);
        });
    }
    return (
        <AppContext.Provider
            value={{result,setResult,bookmarkHandler,unBookmarkHandler,value,likeValue,setLikeValue}}
            >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextAPI};