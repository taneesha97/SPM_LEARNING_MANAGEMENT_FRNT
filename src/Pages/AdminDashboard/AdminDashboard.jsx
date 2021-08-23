import React from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";
import TeacherTableComponent from "../../Component/Admin/TeachersTable/TeacherTableComponent";
import ClassMgntInt from "../../Component/Admin/ClassMgntInt/ClassMgntInt";
import ClassDetailsTable from "../../Component/Admin/ClassTable/ClassDetailsTable";
import AnnouncementSection from "../../Component/Admin/AnnouncementSection/AnnouncementSection";


function AdminDashboard() {

    //Array for the announcement component.
    const array1 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader/>
            <div className="Class-Admin">
                <ClassMgntInt/>
                <ClassDetailsTable/>
            </div>
            <br/>
            <TeacherTableComponent/>
            <AnnouncementSection array1={array1}/>
        </div>

    )
}

export default AdminDashboard