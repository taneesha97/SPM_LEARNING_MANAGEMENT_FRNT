import React from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";

import TeacherTableComponent from "../../Component/Admin/TeachersTable/TeacherTableComponent";

import ClassMgntInt from "../../Component/Admin/ClassMgntInt/ClassMgntInt";
import ClassDetailsTable from "../../Component/Admin/ClassTable/ClassDetailsTable";


function AdminDashboard() {
    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader/>
            <TeacherTableComponent/>
            <ClassMgntInt/>
            <ClassDetailsTable/>
        </div>

    )
}

export default AdminDashboard