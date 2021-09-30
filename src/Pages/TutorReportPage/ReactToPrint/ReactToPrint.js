import React, {useEffect, useRef} from 'react'
import ReactToPrint from "react-to-print";
import ReportTesting from "../Testing/ReportTesting";
import PrintableComponent from "./PrintableComponent/PrintableComponent";
/**
 * If work make this  class a reusable class passing the component as props (Default component)
 * Component to print shoudl be passed inside to this class <PrintableComponent/>
 *
 * **/

function ReactToPrintClass() {

    let componentRef = useRef(null);

    useEffect(() => {

    },[])

    return (
        <div style={{backgroundColor:'#949494', borderRadius:"10px"}}>
            <PrintableComponent ref={el => (componentRef = el)} />
            <ReactToPrint
                trigger={() => <a href="#">Print this out!</a>}
                content={() => componentRef}
            />

        </div>
    )
}

export default ReactToPrintClass;
