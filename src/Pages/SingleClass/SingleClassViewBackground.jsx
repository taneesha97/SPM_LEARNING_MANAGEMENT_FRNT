import React from 'react'
import './style.css'
import TotalStudentView from "../../Component/Class/SinglClassViewInterfaces/TotalStudentView";
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import CourseContent from "../../Component/CourseContent/CourseContent";
import SingleClassUserCountDisplay from "../../Component/SingleClassRoomAnnouncements/SingleClassUserCountDisplay";
function SingleClassViewBackground() {
    return (
            <div className="bluescreen4-singleClassView">
                <SingleClassAnnouncements/>
                <SingleClassUserCountDisplay/>



            </div>
    )
}

export default SingleClassViewBackground
