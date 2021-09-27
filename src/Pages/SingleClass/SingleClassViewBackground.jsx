import React from 'react'
import './style.css'
import TotalStudentView from "../../Component/Class/SinglClassViewInterfaces/TotalStudentView";
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import CourseContent from "../../Component/CourseContent/CourseContent";
function SingleClassViewBackground() {
    return (
            <div className="bluescreen4-singleClassView">
                <SingleClassAnnouncements/>
                {/*<CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}
            </div>
    )
}

export default SingleClassViewBackground
