import React from 'react'
import "./ProfileImage.css"
function ProfileImage({image, name, designation}) {
    return (
        <div className="tutor-profile-container">
            <img className="tutor-profile-picture" src={image} alt={name}/>
            <div className="tutor-profile-name">{name}</div>
            <div className="tutor-profile-designation">{designation}</div>
        </div>
    )
}
export default ProfileImage
