import React, {useEffect, useState} from 'react'
import UserProfile from "../ProfilePage/UserProfile";
import ProfileClassRoom from "../../Component/ProfileClassRoom/ProfileClassRoom";
import {useHistory} from "react-router";


function UserProfilePage() {
    const history = useHistory();
    const navigation = () => {
        history.push('/login');
    }

    let usertype = localStorage.getItem("usertype")
    console.log(usertype)

   if(usertype === "null" ){
       navigation()
   } else {
       console.log("hiii")
    }

    return (
        <div>
            <UserProfile />
            <ProfileClassRoom/>
        </div>
    )
}

export default UserProfilePage
