import React from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import SingleClassViewBackground from "./SingleClassViewBackground";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
function SingleClassView() {
    return (
        <div>
            <SingleClassWelcomeHeader/>
            <SingleClassViewBackground/>
            <CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
