import React from 'react'
import ClassItems from "../../Component/Class/ClassPageInterfaces/ClassItems";
import Footer from "../../Component/Footer/Footer";
import ClassSearch from "../../Component/Class/ClassPageInterfaces/ClassSearch";
import './ClassPage.css'
import {useSelector} from "react-redux";

function ClassPage() {
    const searchData = useSelector((state) => state.classes.classRecords.records);
    return (
     
        <div style={{backgroundColor:'#D6D6D6'}}>
            <ClassSearch searchData={searchData}/>
            <ClassItems/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default ClassPage;
