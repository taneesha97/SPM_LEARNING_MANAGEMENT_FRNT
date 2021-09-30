import React, {useState} from 'react'
import SingleClassWelcomeHeader from "../../Component/WelcomeHeader-Course/SingleClassWelcomeHeader";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
import './style.css'
import SingleClassAnnouncements from "../../Component/SingleClassRoomAnnouncements/SingleClassAnnouncements";
import SingleClassUserCountDisplay from "../../Component/SingleClassRoomAnnouncements/SingleClassUserCountDisplay";
import {useDispatch, useSelector} from "react-redux";
import {getAnnouncements} from "../../Action/Announcement";
function SingleClassView() {

    const dispatch = useDispatch();

    const [announcementData, setAnnouncementData] = useState('');


    const annDetails = useSelector((state) => state.Announcement?.announcementRecords?.records);


    React.useEffect(() => {
        dispatch(getAnnouncements());
        setAnnouncementData(annDetails)
    }, []);

    return (
        <div className="singleclassViewBackground">
            <SingleClassWelcomeHeader/>
            <SingleClassUserCountDisplay/>
            <CourseContent/>
            <SingleClassAnnouncements annoucemntData = {annDetails} setAnnoucementData = {setAnnouncementData}/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
