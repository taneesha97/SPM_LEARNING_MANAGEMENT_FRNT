import React from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import SingleClassViewBackground from "./SingleClassViewBackground";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
import './style.css'
function SingleClassView() {
    return (
        <div className="singleclassViewBackground">
            <SingleClassWelcomeHeader/>
            <SingleClassViewBackground/>
            <CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
