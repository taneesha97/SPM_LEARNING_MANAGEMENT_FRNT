import React, {useEffect, useRef, useState} from 'react'
import ReactToPrint from "react-to-print";
import "./ReactToPrint.scss";
import ReportTesting from "../Testing/ReportTesting";
import PrintableComponent from "./PrintableComponent/PrintableComponent";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import AdminReport1 from "../User/AdminReport1";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../Action/Users";
import {useLocation} from "react-router";
/**
 * If work make this  class a reusable class passing the component as props (Default component)
 * Component to print should be passed inside to this class <PrintableComponent/>
 *
 * **/


function ReactToPrintClass() {

    //Parameters to the Report.
    const { age } = useLocation();

    //Selection User States
    const [admin, setAdmin] = useState(null);
    const [tutor, setTutor] = useState(null);

    //Testing
    console.log(age?.age);
    console.log(age?.age1);
    console.log(age?.type);

    //Admin Variables.
    const admin_age =  age?.age;
    const admin_age1 = age?.age1;

    useEffect(() => {
        //Selection condition for each user.
        if(age?.type === "admin"){
            setAdmin("admin");
        } else if(age?.type === "tutor") {
            setTutor("tutor")
        }
    },[])


    let componentRef = useRef(null);
    const dispatch = useDispatch();
    const response = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
    console.log(response);

    /**
     * dynamically assigned the
     * **/


    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <div className="parent-container">
            <ReactToPrint
                trigger={() =>
                    <div className="printing-component-container">
                        <div className="printing-component-header">PDF Report Generator</div>
                        <div className="printing-component-sub-header">PDF Report Generator</div>
                        <a className="printing-component-a" href="#">
                            <Button style={{backgroundColor: "red", color: "white", marginTop: "40px"}}>Print this
                                out!</Button>
                        </a>
                    </div>
                }
                content={() => componentRef}
            />
            {admin ? <AdminReport1 age = {admin_age} age1={admin_age1} data = {response} className="component-to-print" ref={el => (componentRef = el)}/>
                : tutor ? <PrintableComponent className="component-to-print" ref={el => (componentRef = el)}/>
                    : "Default Error Component"}
        </div>
    )
}

export default ReactToPrintClass;
