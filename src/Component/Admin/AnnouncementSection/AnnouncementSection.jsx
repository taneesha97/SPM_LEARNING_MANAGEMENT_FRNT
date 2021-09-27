import React from 'react'
import './AnnouncementSection.css'
import AnnouncementTable from "./AnnouncementTable/AnnouncementTable";
import ClassAnnouncement from "./ClassAnnouncement/ClassAnnouncement";


function AnnouncementSection({array1}){
    return(
        <React.Fragment>
        <div className="announcement-section-responsive-layout">
            <div className="announcement-section-responsive-subcomponent1">
                <ClassAnnouncement/>
            </div>
            {/*<div className="announcement-section-responsive-subcomponent2">*/}
            {/*    /!*<AnnouncementTable array={array1}/>*!/*/}
            {/*</div>*/}
        </div>
        </React.Fragment>
    )
}

export default AnnouncementSection