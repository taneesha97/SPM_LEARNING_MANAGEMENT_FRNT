import React from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";
import ClassMgntInt from "../../Component/Admin/ClassMgntInt/ClassMgntInt";

function AdminDashboard() {
    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader/>
            <ClassMgntInt/>
        </div>

    )
}

export default AdminDashboard