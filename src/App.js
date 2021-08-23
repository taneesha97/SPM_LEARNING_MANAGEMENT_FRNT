import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./Component/NavigationBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserProfile from "./Pages/StudentProfilePage/UserProfile";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TutorDashboard from "./Pages/TutorDashboard/TutorDashboard";
import NavBarButtonComponent from "./Component/NavigationBar/NavBarButtonComponent";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import UserProfilePage from "./Pages/UserProfile/UserProfilePage";
import ClassPage from "./Pages/ClassPage/ClassPage";
import {Provider} from "react-redux";
import store from "./store";
import EmailUpdateComponent from "./Component/Profile/EmailUpdateComponent";


const App = () => {
//Add the React Router And Create Routing
  return (
          <BrowserRouter>
              <Navbar/>
              <Switch>
                  <Route exact path = "/home" component={HomePage}/>
                  <Route exact path = "/profile" component={UserProfilePage}/>
                  <Route exact path = "/login" component={LoginPage}/>
                  <Route exact path = "/registration" component={RegistrationPage}/>
                  <Route exact path = "/tutordash" component={TutorDashboard}/>
                  <Route exact path = "/admindash" component={AdminDashboard}/>
                  <Route exact path = "/navbarbuttoncomponent" component={NavBarButtonComponent}/>
                  <Route exact path = "/emailupdate" component={EmailUpdateComponent}/>
                  <Route exact path = "/class" component={ClassPage}/>
              </Switch>
          </BrowserRouter>
  )
}
export default App;
