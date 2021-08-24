import React from 'react'
import ClassItems from "../../Component/Class/ClassPageInterfaces/ClassItems";
import Footer from "../../Component/Footer/Footer";
import ClassSearch from "../../Component/Class/ClassPageInterfaces/ClassSearch";
import './ClassPage.css'

function ClassPage() {
    return (
        <div className="ClassPage-Background">
            <ClassSearch/>
            <ClassItems/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default ClassPage
