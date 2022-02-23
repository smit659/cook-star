import React from 'react';
//import ReactDOM from 'react-dom';

import '../css/About.css';
function About() {

    return (
        <div className="About-section">
          <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"/>
            <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
          </head>
          
     <section className="section-about">
      <div className="container" >
        
          <h3 className="white whiter"> ABOUT US
          <div className="underline"></div>
          <p className="desc">
            Hey there, <br/>
            Welcome to CookStar.com. 
            <br/>
            <br/>
             Our aim through this website is to ease your everyday dilemma so as to what to make new out of daily monotonous routine so that 
             food does not taste boring to your family. We at CookStar knew that key towards healthy & good family relations is good and refreshing food. But problem was what to make out of ingredients available at home??
             <br/>
             <br/>
             Feeling stressed as what to make?? Well now as a solution we have brought to you delecacies and recipes from  across the globe. So explore the website and let us know your reviews and suggestions.
             <br/>
             <br/>
             Happy Cooking!!!!
        </p>
        </h3>
        </div>
    </section>

    <section className="team">
        <h2 className="white">  OUR TEAM</h2>
           

    <div className="wrapper-grid">
 
    <div className="contain">

    <a target="_blank" href="https://www.linkedin.com/in/smit-soni-3213ba192/">  
<i class="fab fa-linkedin"><h3 className="name">Smit Soni</h3></i> </a> 
   
    </div>
    <div className="contain">

    <a target="_blank" href="https://www.linkedin.com/in/jay-shah-09/">    
<i class="fab fa-linkedin"> <h3 className="name">Jay Shah</h3></i></a>  
    </div>
    <div className="contain">
<a target="_blank" href="https://www.linkedin.com/in/falak-hirani-a102591a1/"> 
<i class="fab fa-linkedin"><h3 className="name">Falak Hirani</h3></i> </a>     
    </div>

    <div className="contain">

    <a target="_blank" href="https://www.linkedin.com/in/niyatipanchal/">   
<i class="fab fa-linkedin"><h3 className="name">Niyati Panchal</h3></i> </a>    
    </div>

 

   

    </div>
    </section>

   </div>
    )
}

export default About;