import React,{createContext,useReducer} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Search from './pages/Search'
import SingleFoodItem from './pages/SingleFoodItem'
import Bag from './pages/Bag'
import UserRecipe from './pages/UserRecipe'
import UserRecipePage from './pages/UserRecipePage'
import Detail from './pages/Detail.jsx'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Me from './pages/Me.jsx'
import EditProfile from './pages/EditProfile'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {initialState,reducer} from './reducer/reducer';
export const userContext=createContext();

function App() {
const  [state,dispatch]=useReducer(reducer,initialState);
 return (
  <userContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/item/:name">
          <SingleFoodItem/>
        </Route>
        <Route path="/bag">
          <Bag/>
        </Route>
        <Route path="/create" >
          <UserRecipe/>
        </Route>
        <Route exact path="/users">
          <UserRecipePage/>
        </Route>
        <Route exact path="/users/:id">
          <Detail/>
        </Route>
        <Route  path="/users/info/:email">
          <UserProfile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/me">
          <Me/>
        </Route>
        <Route path="/updateProfile">
          <EditProfile/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </userContext.Provider>
 )
}

export default App;
