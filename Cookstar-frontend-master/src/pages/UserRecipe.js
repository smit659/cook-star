import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/UserRecipe.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const UserRecipe = () => {
  let history = useHistory();
  const [ingredients, setIngredients] = useState([{ id: "1", ingredient: "" }]);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [file, setFile] = useState(null);
  const [step, setStep] = useState([{ id: "1", step: "" }]);
  const [stepCount, setStepCount] = useState(1);
  const [recipeImage, setRecipeImage] = useState("");

  const ingrid = [];
  const steps = [];
  const [formdata, setData] = useState({
    recipetitle: "",
    recipecontent: "",
    recipeorigin: "",
    serves: "",
    cooktime: "",
    email:localStorage.getItem('email')
  });
  const x = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${x}` },
  };

  const addIngredient = () => {
    setIngredientCount(ingredientCount + 1);
    setIngredients([...ingredients, { id: Math.random()*10, ingredient: "" }]);
  };

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    setIngredientCount(ingredientCount - 1);
  };

  const addStep = () => {
    setStepCount(stepCount + 1);
    setStep([...step, { id: Math.random()*10, step: "" }]);
  };

  const removeStep = (id) => {
    setStep(step.filter((step) => step.id !== id));
    setStepCount(stepCount - 1);
  };

  const formdatahandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const filechangehandle = (e) => {
    //console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(stepCount==0 || ingredientCount==0) {alert("Atleast One Step And Ingrident required");return;}
    const aao = document.getElementsByClassName('ingredient-step');
    const aas = document.getElementsByClassName('ingredient-steps');
    for (var i = 0; i < ingredientCount; i++) {
      if (aao[i].value.length > 0) {
        console.log(aao[i].value);
        ingrid.push(aao[i].value);
      }
    }
    for (var i = 0; i < stepCount; i++) {
      if (aas[i].value.length > 0) {
        console.log(aas[i].value);
        steps.push(aas[i].value);
      }
    }
    //  console.log('ss',ingrid);
    function fetchs() {
      const data = new FormData();
      data.append("recipetitle", formdata.recipetitle);
      data.append("recipecontent", formdata.recipecontent);
      data.append("recipeorigin", formdata.recipeorigin);
      data.append("serves", formdata.serves);
      data.append("cooktime", formdata.cooktime);
      for (var i = 0; i < ingrid.length; i++) {
        data.append(`ings`, ingrid[i]);
      }
      for (var i = 0; i < steps.length; i++) {
        data.append("steps", steps[i]);
      }

      data.append("imager", file);
      data.append("temp_id",new Date().getTime());
      data.append("email",formdata.email);
      //console.log(file);
      console.log(data);
      axios
        .post("http://localhost:3001/recipeData",data, config)
        .then((res) => {
          alert("successfully published");
          history.push('/me');
        })
        .catch((err) => {
          alert("Unauthorized!! Login  First");
          history.push("/login");
        });
      console.log("SUCCESSFULLY SUBMITTED");
    }
    fetchs();
  }

  return (
    <>
      <div className="recipeForm-container" >
      {/* <div className="hide-preloader">
    <img src="preloader.gif" alt="preloader" class="preloader__item" />
    </div> */}
        <form  className="foam"
          style={{width: '300px',color:'#D8123C'}}
          enctype="multipart/form-data"
          action="/recipeData"
          method="post"
          onSubmit={handleSubmit}>
        
            <label htmlFor="input-image">
              <img classname="img-create" src="https://img.icons8.com/bubbles/2x/camera.png" alt="" />
            </label>
            <input required name="imager" onChange={filechangehandle} type="file" alt="..." accept="image/*" id="input-image" />
         

          <div className="recipeInfo-container">
            <input
              onChange={formdatahandler}
              type="text"
              name="recipetitle"
              id="recipe-title"
              required
              placeholder="Add Your Recipe Title"
              className="about-recipe"
            />
            <div>
              <textarea
                cols="45"
                rows="10"
                autoComplete="off"
                required
                name="recipecontent"
                placeholder="Tell us about your recipe - who inspired it, why it's special, what makes it unique, who you cooked it for."
                id="recipe-info"
                className="about-recipe"
              />
            </div>
            <div>
              <input
                onChange={formdatahandler}
                type="text"
                name="recipeorigin"
                required
                autoComplete="off"
                id="recipe-origin"
                placeholder="Add Recipe Origin"
                className="about-recipe"
              />
            </div>
            <div className="quantity-info">
              <label htmlFor="serves" className="label-info">
                Serves
              </label>
              <input
              
              onChange={formdatahandler}
              onkeypress="return event.charCode >= 48" min="1" max="500"
                type="number"
                id="serves"
                name="serves"
                placeholder="2 people"
                className="about-recipe info"
              />
            </div>
            <div className="div">
              <label htmlFor="cooktime" className="label-info">
                Cook Time
              </label>
              <input
               onChange={formdatahandler}
                type="text"
                required
                autoComplete="off"
                auto
                name="cooktime"
                id="cooktime"
                placeholder="1 hr 30 min"
                className="about-recipe info"
              />
            </div>
          </div>
          <div className="recipeInfo-container">
            <h3 className="heading">Ingredients</h3>
            <div>
              {ingredients.map((ingredient) => {
                const { id } = ingredient;
                return (
                  <div key={id} className="ingredient-div">
                    <label htmlFor="ingredient" className="bars">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKUMOf_vEXhQJuTzyq-JekZL4eWoWrnYO8Q&usqp=CAU"
                        className="label-img"
                      />
                    </label>
                    <input
                      className={`ingredient-step`}
                      type="text"
                      autoFocus
                      autoComplete="off"
                      name={id}
                      required
                      id="ingredient"
                      placeholder="2cup flour"
                    />
                    <button
                      className="remove-button"
                      onClick={() => removeIngredient(id)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                        alt=""
                        className="label-img"
                      />
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={addIngredient}
                className="add-button"
                id="btn"
              >
                <img
                  src="https://assets.dryicons.com/uploads/icon/preview/9921/small_1x_be477657-9276-422b-a2b0-0c67d539e23b.png"
                  alt=""
                  className="plus"
                />
                ingredient
              </button>
            </div>
          </div>

          <div className="recipeInfo-container stp">
            <h3 className="heading">Steps</h3>
            {step.map((step) => {
              const { id } = step;
              return (
                <div key={id} className="ingredient-div">
                  <textarea
                    id="steps"
                    cols="30"
                    required
                    autoFocus
                    name={id + "s"}
                    autoComplete="off"
                    rows="5"
                    className={`ingredient-steps`}
                    // className= {index+"s"}
                  ></textarea>
                  <button
                    onClick={() => removeStep(id)}
                    className="remove-button"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                      alt=""
                      className="label-img"
                    />
                  </button>
                </div>
              );
            })}

            <button type="button" onClick={addStep} className="add-button">
              <img
                src="https://assets.dryicons.com/uploads/icon/preview/9921/small_1x_be477657-9276-422b-a2b0-0c67d539e23b.png"
                alt=""
                className="plus"
              />
              step
            </button>
          </div>
          <button className="publish-btn" type="submit">Publish Your Recipe</button>
        </form>
      </div>
    </>
  );
};

export default UserRecipe;