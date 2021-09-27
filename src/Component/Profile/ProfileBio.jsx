import React from 'react'
import '../../Pages/ProfilePage/UserProfile.css'

function ProfileBio(props) {
    return (
        <div className="userprofile-bio">
            <div className="userprofile-bio1">
                <div className="userprofile-bio1-info1">
                    <div className="text-center">
                        <h2 className="userprofile-bio1-info1-main">Personal Details</h2>
                    </div>
                    <div className="card">
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col">
                                    <h6 className="mb-0">{props?.user1?.name}</h6>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col">
                                    <h6 className="mb-0">{props?.user1?.email}</h6>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="mb-0">Age</h6>
                                </div>
                                <div className="col">
                                    <h6 className="mb-0">{props?.user1?.age}</h6>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="mb-0">Position</h6>
                                </div>
                                <div className="col">
                                    <h6 className="mb-0">{props?.user1?.type}</h6>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <h6 className="mb-0">Username</h6>
                                </div>
                                <div className="col">
                                    <h6 className="mb-0">{props?.user1?.username}</h6>

                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileBio
