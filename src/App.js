import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./Component/NavigationBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserProfile from "./Pages/ProfilePage/UserProfile";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TutorDashboard from "./Pages/TutorDashboard/TutorDashboard";
import NavBarButtonComponent from "./Component/NavigationBar/NavBarButtonComponent";
import NavBarButtonComponent2 from "./Component/NavigationBar/NavBarButtonComponent2";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import UserProfilePage from "./Pages/UserProfile/UserProfilePage";
import TestingReport from "./Component/Report/TestingReport";

import ClassPage from "./Pages/ClassPage/ClassPage";

import {ProtectedRoute} from "./Validation/ProtectedRoutes";

import {Provider} from "react-redux";
import store from "./store";
import UserDetailsUpdateComponent from "./Component/Profile/UserDetailsUpdateComponent";
import SingleClassView from "./Pages/SingleClass/SingleClassView";
import ClassCourseview from "./Pages/ClassCourseview/ClassCourseview";
import DownloadFile from "./Component/Downloads/DownloadFile";
import PopUpTeacherStatusComponent from "./Component/PopupModel/TeacherStatus/PopUpTeacherStatusComponent";
import VideoComponentInterface from "./Component/VideoComponent/VideoComponentInterface";
import CustomVideoPlayerComponent from "./Component/Tutor/CustomVideoPlayerComponent/CustomVideoPlayerComponent";
import VideoResourcePage from "./Pages/VideoResourcePage/VideoResourcePage";
import PopUpUpdate from "./Component/Admin/ClassMgntInt/PopUpUpdate/PopUpUpdate";


const App = () => {
//Add the React Router And Create Routing
  return (
          <BrowserRouter>
              <Navbar/>
              <Switch>
                  <Route exact path="/tutordash" >
                      <TutorDashboard/>
                  </Route>
                  <Route exact path = "/home" component={HomePage}/>
                  <Route exact path = "/" component={HomePage}/>
                  <ProtectedRoute exact path = "/profile" component={UserProfilePage}/>
                  <Route exact path = "/login" component={LoginPage}/>
                  <Route exact path = "/registration" component={RegistrationPage}/>

                  {/*<Route exact path = "/tutordash" component={TutorDashboard}/>*/}

                  <Route exact path = "/admindash" component={AdminDashboard}/>

                  <Route exact path = "/navbarbuttoncomponent" component={NavBarButtonComponent}/>
                  <Route exact path = "/navbarbuttoncomponent2" component={NavBarButtonComponent2}/>
                  <Route exact path = "/emailupdate" component={UserDetailsUpdateComponent}/>
                  <ProtectedRoute exact path = "/class" component={ClassPage}/>
                  <Route exact path = "/ClassCourseview" component={ClassCourseview}/>
                  <ProtectedRoute exact path = "/singleclassview" component={SingleClassView}/>
                  <Route exact path = "/download" component={DownloadFile}/>
                  <Route exact path = "/teacherstatuspopup" component={PopUpTeacherStatusComponent}/>
                  <Route exact path = "/videocomponent" component={VideoComponentInterface}/>
                  <Route exact path = "/customvideoplayer" component={CustomVideoPlayerComponent}/>
                  <Route exact path = "/video" component={VideoResourcePage}/>
                  <Route exact path = "/popup" component={PopUpUpdate}/>
                  <Route exact path = "/tes" component={TestingReport}/>
              </Switch>
          </BrowserRouter>
  )
}
export default App;
