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
import AdminDashHeader from "./Component/Admin/Header/AdminDashHeader";

const App = () => {
//Add the React Router And Create Routing
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path = "/home" component={HomePage}/>
            <Route exact path = "/profile" component={UserProfile}/>
            <Route exact path = "/login" component={LoginPage}/>
            <Route exact path = "/registration" component={RegistrationPage}/>
            <Route exact path = "/tutordash" component={TutorDashboard}/>
            <Route exact path = "/admindash" component={AdminDashHeader}/>
            <Route exact path = "/navbarbuttoncomponent" component={NavBarButtonComponent}/>
        </Switch>
      </BrowserRouter>
  )
}
export default App;
