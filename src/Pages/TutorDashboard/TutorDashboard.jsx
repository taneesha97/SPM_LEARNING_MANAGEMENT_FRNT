import React, {useEffect} from 'react'
import "./TutorDashboard.css"
import TutorDashHeader from "../../Component/Tutor/Header/TutorDashHeader";
import CourseMgntInt from "../../Component/Tutor/CourseMgntInt/CourseMgntInt";
import FileAttachInt from "../../Component/Tutor/FileAttachInt/FileAttachInt";
import InqFeedInt from "../../Component/Tutor/InqFeedInt/InqFeedInt";
import StudentTableComponent from "../../Component/Tutor/StudentTable/StudentTableCompoenent";
import { useDispatch, useSelector } from "react-redux";
import {fetchCourses} from "../../Action/Courses";
function TutorDashboard() {

    const courses = useSelector((state) => state.CourseReducer);
    const dispatch = useDispatch();
    useEffect(()=> {
        getCourses();
    }, [])

    //Get Course Data
    const getCourses = () => {
        dispatch(fetchCourses());
    }

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
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"}];

    //JSON object for the headers
    const array4 = [
        {"header":"Course Count", "count":"5K"},
        {"header":"Material Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"},
        {"header":"Student Count", "count":"5K"}
    ];
    console.log(courses);
    return (
        <div className="tutor-dashboard-page">
            <TutorDashHeader array5={array4}/>
            <CourseMgntInt array4={array3} />
            <FileAttachInt array4={array4}/>
            <InqFeedInt array1={array1} array2={array2}/>
            <StudentTableComponent/>
        </div>
    )
}
export default TutorDashboard
