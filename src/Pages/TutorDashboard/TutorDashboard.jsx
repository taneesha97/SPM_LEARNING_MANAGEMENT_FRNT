import React from 'react'
import "./TutorDashboard.css"
import TutorDashHeader from "../../Component/Tutor/Header/TutorDashHeader";
import CourseMgntInt from "../../Component/Tutor/CourseMgntInt/CourseMgntInt";
import FileAttachInt from "../../Component/Tutor/FileAttachInt/FileAttachInt";
import InqFeedInt from "../../Component/Tutor/InqFeedInt/InqFeedInt";
import StudentTableComponent from "../../Component/Tutor/StudentTable/StudentTableCompoenent";

function TutorDashboard() {
    return (
        <div className="tutor-dashboard-page">
            <TutorDashHeader/>
            <CourseMgntInt/>
            <FileAttachInt/>
            <InqFeedInt/>
            <StudentTableComponent/>
        </div>
    )
}

export default TutorDashboard
