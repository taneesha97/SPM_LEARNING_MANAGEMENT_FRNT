import React from 'react'
import "./InqFeedInt.css"
import Announcement from "./Announcement/Announcement";
function InqFeedInt() {
    return (
        <div className="inqfeedint-responsive-layout">
            <div className="responsive-subcomponent1">
                <Announcement/>
            </div>
            <div className="responsive-subcomponent2">
                <Announcement/>
            </div>
            <div className="responsive-subcomponent3">
                <Announcement/>
            </div>
        </div>
    )
}
export default InqFeedInt
