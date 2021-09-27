import React from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import SingleClassViewBackground from "./SingleClassViewBackground";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
import './style.css'
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
function SingleClassView() {
    return (
        <div className="singleclassViewBackground">
            <SingleClassWelcomeHeader/>
            <SingleClassAnnouncements/>
            <SingleClassViewBackground/>
            <CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
