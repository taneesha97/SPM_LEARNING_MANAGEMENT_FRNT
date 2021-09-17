import React, {useState} from 'react'
import UserProfile from "../ProfilePage/UserProfile";
import ProfileClassRoom from "../../Component/ProfileClassRoom/ProfileClassRoom";
import {useHistory} from "react-router";


function UserProfilePage() {
    const history = useHistory();
    const navigation = () => {
        history.push('/loginpage');
    }

    return (
        <div>
            <UserProfile />
            <ProfileClassRoom/>
        </div>
    )
}

export default UserProfilePage
