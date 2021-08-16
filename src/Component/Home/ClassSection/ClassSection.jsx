import React from 'react'
import ClassTile from "../../Class/ClassTile/ClassTile";
import './HomeClassSection.css'

const ClassSection = () => {

    return (<React.Fragment>
            <div className="class-section">
                <div className="class-section-main-header">
                    <div className="class-section-header">
                        <button className="class-section-button" >View All</button>
                        <h3 className="class-section-main1">Class</h3>
                        <div>
                            <p className="class-section-second">Latest and Best selling course,  Enroll now for the full life time access.</p>
                        </div>

                    </div>
                    <div className="class-section-container-main">
                        <ClassTile/>
                        <ClassTile/>
                        <ClassTile/>
                        <ClassTile/>
                        <ClassTile/>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )


}

export default ClassSection;