import React, {useEffect, useState} from 'react'
import UserProfile from "../ProfilePage/UserProfile";
import ProfileClassRoom from "../../Component/ProfileClassRoom/ProfileClassRoom";
import {useHistory} from "react-router";


function UserProfilePage() {


    // let usertype = localStorage.getItem("usertype")
    // console.log(usertype)



    return (
        <div>
            <UserProfile />
            <ProfileClassRoom/>
        </div>
    )
}

export default UserProfilePage
