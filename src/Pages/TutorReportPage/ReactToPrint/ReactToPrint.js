import React, {useEffect, useRef} from 'react'
import ReactToPrint from "react-to-print";
import "./ReactToPrint.scss";
import ReportTesting from "../Testing/ReportTesting";
import PrintableComponent from "./PrintableComponent/PrintableComponent";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
/**
 * If work make this  class a reusable class passing the component as props (Default component)
 * Component to print shoudl be passed inside to this class <PrintableComponent/>
 *
 * **/

function ReactToPrintClass() {

    let componentRef = useRef(null);

    useEffect(() => {

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
            <PrintableComponent className="component-to-print" ref={el => (componentRef = el)}/>
        </div>
    )
}

export default ReactToPrintClass;
