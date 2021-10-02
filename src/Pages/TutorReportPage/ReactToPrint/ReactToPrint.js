import React, {useEffect, useRef, useState} from 'react'
import ReactToPrint from "react-to-print";


import "./ReactToPrint.css";
import ReportTesting from "../Testing/ReportTesting";

import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../Action/Users";
import AdminReport2 from "../User/AdminReport2";

import {useLocation} from "react-router";

/**
 * External Report Imports.
 * **/
import AdminReport1 from "../User/AdminReport1";
import AdminPrintableComponent from "../../AdminReportPage/AdminPrintableComponent/AdminPrintableComponent";
import PrintableComponent from "./PrintableComponent/PrintableComponent";

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
    const [payment, setPayment] = useState(null);
    const [tclass, setTClass] = useState(null);
    const [admin1, setAdmin1] = useState(null);

    //Testing
    console.log('aa ',age?.age);
    console.log('aa1 ',age?.age1);
    console.log('aa2 ',age?.type);

    //Admin Variables.
    const admin_age =  age?.age;
    const admin_age1 = age?.age1;

    useEffect(() => {
        //Selection condition for each user.

        /**
         * Update the condition accordingly
         * **/


        if(age?.type === "admin"){
            setAdmin("admin");
        } else if(age?.type === "tutor") {
            setTutor("tutor")
        } else if(age?.type === "payment"){
            setPayment("payment");
        } else if(age?.type === "tclass"){
            setTClass("tclass");
        }
        else if(age?.type === "admin1"){
            setAdmin1("admin1");
        }
    },[])

// function ReactToPrintClass({input}) {

// function ReactToPrintClass({input}) {


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

            {
                admin ?
                <AdminReport1 age = {age?.age} age1={age?.age1} data = {response} className="component-to-print" ref={el => (componentRef = el)}/> :
                    tutor ? <PrintableComponent className="component-to-print" ref={el => (componentRef = el)}/> :

                        admin1 ? <AdminReport2 className="component-to-print" ref={el => (componentRef = el)}/> :

                    tclass ? <AdminPrintableComponent className="component-to-print" ref={el => (componentRef = el)}/> :

                        payment? "Payment report component comes here!":
                            tclass? "Class report component comes here!":
                        "Default Error Component"}

        </div>
    )
}

export default ReactToPrintClass;
