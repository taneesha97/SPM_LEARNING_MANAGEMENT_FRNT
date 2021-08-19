import React from 'react'
import "./InqFeedInt.css"
import Feedback from "./Feedback/Feedback";
import AbstractModalHeader from "react-bootstrap/AbstractModalHeader";
import Announcement from "./Announcement/Announcement";
import Inquiry from "./Inquiry/Inquiry";
function InqFeedInt() {

    //Array for the announcement component.
    const array1 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    //Array for the inquiry component.
    const array2 = [
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"},
        {"header":"Kamal", "description":"New News Update available"}];

    return (
        <div className="inqfeedint-responsive-layout">
            <div className="responsive-subcomponent1">
                <Feedback array={array1}/>
            </div>
            <div className="responsive-subcomponent2">
                <Announcement/>
            </div>
            <div className="responsive-subcomponent3">
                <Inquiry array={array1}/>
            </div>
        </div>
    )
}
export default InqFeedInt
