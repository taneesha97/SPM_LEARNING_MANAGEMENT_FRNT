import './PrintableComponent.scss'
import {Button} from "@progress/kendo-react-buttons";
import {PDFExport} from "@progress/kendo-react-pdf";
import React from "react";
class PrintableComponent extends React.Component {

    render() {
        return (
            <div className="app-content">
                    <div>
                        <h1> Kendo React PDF Generator.</h1>
                        <p> PDF generating tools for react.</p>
                        <div className="button-area">
                            <Button primary={true} >Primary Button</Button>
                            <Button >Export Method jsPDF</Button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default PrintableComponent;
