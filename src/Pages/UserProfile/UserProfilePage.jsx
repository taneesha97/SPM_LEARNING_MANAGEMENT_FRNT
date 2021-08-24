import React, {useState} from 'react'
import UserProfile from "../StudentProfilePage/UserProfile";
import ProfileClassRoom from "../../Component/ProfileClassRoom/ProfileClassRoom";
import VideoComponentInterface from "../../Component/VideoComponent/VideoComponentInterface";
import CourseWelcomeHeader from "../../Component/WelcomeHeader-Course/CourseWelcomeHeader";

function UserProfilePage() {

    return (
        <div>
            {/*<CourseWelcomeHeader/>*/}
            <UserProfile />
            <ProfileClassRoom/>
        </div>
    )
}

export default UserProfilePage
