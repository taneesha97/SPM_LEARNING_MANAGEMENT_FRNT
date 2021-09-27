import React from 'react'
import './style.css'
import TotalStudentView from "../../Component/Class/SinglClassViewInterfaces/TotalStudentView";
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import CourseContent from "../../Component/CourseContent/CourseContent";
import SingleClassUserCountDisplay from "../../Component/SingleClassRoomAnnouncements/SingleClassUserCountDisplay";
function SingleClassViewBackground() {
    return (
            <div className="bluescreen4-singleClassView">
                <SingleClassUserCountDisplay/>

                {/*<CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}
            </div>
    )
}

export default SingleClassViewBackground
