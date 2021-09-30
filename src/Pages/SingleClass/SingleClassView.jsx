import React, {useEffect, useState} from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
import './style.css'
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import SingleClassUserCountDisplay from "../../Component/SingleClassRoomAnnouncements/SingleClassUserCountDisplay";
import {useDispatch, useSelector} from "react-redux";
import {getAnnouncements} from "../../Action/Announcement";
import {getUserCount} from "../../Action/Users";
function SingleClassView(props) {

    const dispatch = useDispatch();
    const annDetails = useSelector((state) => state.Announcement?.announcementRecords?.records);
    const usercount = useSelector((state) => state.userDetails1?.usercount?.data);
    const data = props?.location?.state?.data;

    useEffect(()=> {
        dispatch(getUserCount())
    }, [])

    React.useEffect(() => {
        dispatch(getAnnouncements());
    }, []);

    return (
        <div className="singleclassViewBackground">
            <SingleClassWelcomeHeader data = {data}/>
            <SingleClassUserCountDisplay usercount = {usercount}/>
            <CourseContent/>
            <SingleClassAnnouncements annoucemntData = {annDetails}/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
