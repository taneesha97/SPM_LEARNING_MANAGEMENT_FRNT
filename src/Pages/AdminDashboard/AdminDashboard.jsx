import React from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";
import TeacherTableComponent from "../../Component/Admin/TeachersTable/TeacherTableComponent";

function AdminDashboard() {
    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader/><br/>
            <TeacherTableComponent/>
        </div>

    )
}

export default AdminDashboard