import React from 'react'
import Login from "../../Component/Login/Login";
import "./TutorDashboard.css"
import TutorDashHeader from "../../Component/Tutor/Header/TutorDashHeader";
import CourseMgntInt from "../../Component/Tutor/CourseMgntInt/CourseMgntInt";
import FileAttachInt from "../../Component/Tutor/FileAttachInt/FileAttachInt";
import InqFeedInt from "../../Component/Tutor/InqFeedInt/InqFeedInt";

function TutorDashboard() {
    return (
        <div>
            <TutorDashHeader/>
            <CourseMgntInt/>
            <FileAttachInt/>
            <InqFeedInt/>
        </div>
    )
}

export default TutorDashboard
