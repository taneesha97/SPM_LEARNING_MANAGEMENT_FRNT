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
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="mb-0">Full Name</div>
                                </div>
                                <div className="col">
                                    <div className="mb-0">{props?.user1?.name}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="mb-0">Email</div>
                                </div>
                                <div className="col">
                                    <div className="mb-0">{props?.user1?.email}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="mb-0">Age</div>
                                </div>
                                <div className="col">
                                    <div className="mb-0">{props?.user1?.age}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="mb-0">Position</div>
                                </div>
                                <div className="col">
                                    <div className="mb-0">{props?.user1?.type}</div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="mb-0">Username</div>
                                </div>
                                <div className="col">
                                    <div className="mb-0">{props?.user1?.username}</div>

                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileBio
