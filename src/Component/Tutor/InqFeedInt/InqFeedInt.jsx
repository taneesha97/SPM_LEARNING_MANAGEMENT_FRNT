import React from 'react'
import "./InqFeedInt.css"
import Feedback from "./Feedback/Feedback";
import Announcement from "./Announcement/Announcement";
import Inquiry from "./Inquiry/Inquiry";

/**
 * Get this two arrays into the tutor dashboard page.
 * **/


function InqFeedInt({array1, array2}) {

    return (
        <div className="inqfeedint-responsive-layout">
            <div className="responsive-subcomponent1">
                <Feedback array={array1}/>
            </div>
            <div className="responsive-subcomponent2">
                <Announcement/>
            </div>
            <div className="responsive-subcomponent3">
                <Inquiry array={array2}/>
            </div>
        </div>
    )
}
export default InqFeedInt
