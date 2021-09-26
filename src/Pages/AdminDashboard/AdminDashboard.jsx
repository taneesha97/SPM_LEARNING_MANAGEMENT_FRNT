import React, {useEffect,useState} from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";
import TeacherTableComponent from "../../Component/Admin/TeachersTable/TeacherTableComponent";
import ClassMgntInt from "../../Component/Admin/ClassMgntInt/ClassMgntInt";
import ClassDetailsTable from "../../Component/Admin/ClassTable/ClassDetailsTable";
import AnnouncementSection from "../../Component/Admin/AnnouncementSection/AnnouncementSection";
import AllTransations from "../../Component/Admin/AllTransations/AllTransations";
import {useHistory} from "react-router";


function AdminDashboard() {
    const [tableClass,setTableClass] = useState([]);
    let usertype = localStorage.getItem("usertype")
    console.log(usertype)
    const history = useHistory();

    // useEffect(()=> {
    //     if(usertype != "admin"){
    //         history.push('./login')
    //         //window.location.href='/login';
    //     } else {
    //         //setFlag(true);
    //     }
    // }, [])


    //Array for the announcement component.
    const array1 = [
        {"header":"Announcement 1", "description":"New News Update available"},
        {"header":"Announcement 2", "description":"New News Update available"},
        {"header":"Announcement 3", "description":"New News Update available"},
        {"header":"Announcement 4", "description":"New News Update available"},
        {"header":"Announcement 5", "description":"New News Update available"},
        {"header":"Announcement 6", "description":"New News Update available"}];

    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader/>
            <div className="Class-Admin">
                <ClassMgntInt/>
                <ClassDetailsTable method={setTableClass}/>
            </div>
            <br/>
            <TeacherTableComponent/>
            <AnnouncementSection array1={array1}/>
        </div>

    )
}

export default AdminDashboard