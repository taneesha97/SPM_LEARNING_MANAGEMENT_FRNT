import React from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import SingleClassViewBackground from "./SingleClassViewBackground";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
import './style.css'
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import SingleClassUserCountDisplay from "../../Component/SingleClassRoomAnnouncements/SingleClassUserCountDisplay";
function SingleClassView() {
    return (
        <div className="singleclassViewBackground">
            <SingleClassWelcomeHeader/>
            <SingleClassAnnouncements/>
            {/*<SingleClassUserCountDisplay/>*/}
            {/*<CourseContent/>*/}
            {/*<SingleClassViewBackground/>*/}

            {/*<Footer/>*/}
        </div>
    )
}

export default SingleClassView
