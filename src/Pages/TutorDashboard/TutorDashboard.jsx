import React from 'react'
import "./TutorDashboard.css"
import TutorDashHeader from "../../Component/Tutor/Header/TutorDashHeader";
import CourseMgntInt from "../../Component/Tutor/CourseMgntInt/CourseMgntInt";
import FileAttachInt from "../../Component/Tutor/FileAttachInt/FileAttachInt";
import InqFeedInt from "../../Component/Tutor/InqFeedInt/InqFeedInt";

function TutorDashboard() {

    //Data Arrays.
    //Array for the announcement component.
    const array1 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    //Array for the inquiry component.
    const array2 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Nimal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    //Array for the courses. course table.
    const array3 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    return (
        <div className="tutor-dashboard-page">
            <TutorDashHeader/>
            <CourseMgntInt/>
            <FileAttachInt/>
            <InqFeedInt array1={array1} array2={array2}/>
        </div>
    )
}

export default TutorDashboard
