import React, {useEffect, useRef} from 'react'
import ReactToPrint from "react-to-print";
import "./ReactToPrint.scss";
import ReportTesting from "../Testing/ReportTesting";
import PrintableComponent from "./PrintableComponent/PrintableComponent";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import AdminReport1 from "../User/AdminReport1";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../../Action/Users";
/**
 * If work make this  class a reusable class passing the component as props (Default component)
 * Component to print shoudl be passed inside to this class <PrintableComponent/>
 *
 * **/

function ReactToPrintClass() {

    let componentRef = useRef(null);
    const dispatch = useDispatch();
    const response = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
    console.log(response);

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
            <AdminReport1 data = {response} className="component-to-print" ref={el => (componentRef = el)}/>
            {/*<PrintableComponent className="component-to-print" ref={el => (componentRef = el)}/>*/}
        </div>
    )
}

export default ReactToPrintClass;
