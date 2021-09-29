import React from 'react';
import { useRef, useState, useEffect } from 'react';
import sampleData from './SampleData/invoice-data.json'
import Logo from "./companyLogo/Logo.png";
import ReactDOM from 'react-dom';
import jsPDF from "jspdf";

// Chart Dependencies
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

// React Utils from Kendo
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './TutorReportPage.scss'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TutoReportPage() {
    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);
    const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});

    const ddData = [{text: "A4", value: "size-a4" },
        {text: "Letter", value: "size-letter" },
        {text: "Executive", value: "size-executive"}
    ];

    const handleExportWithComponent = (event) => {
        console.log("PDF Export component, ");
        pdfExportComponent.current.save();
    }

    const updatePageLayout = (event) => {
        setLayoutSelection(event.target.value);
    }

    const handleExportWithMethod = (event) => {
        console.log("PDF Export with method, ");
        savePDF(contentArea.current, {paperSize: "A4"});
    }

    //Testing method for printing the PDF
    const exportPDF2 = () => {
        // TODO: Fetch data from backend
        // TODO: Move content generator to different function
        let element = document.createElement('div')
        element.setAttribute('id','test')
        element.innerHTML = 'terefere<h2>hello</h2>'
        let domElement = ReactDOM.findDOMNode(element);
        savePDF(domElement, {
            paperSize: 'A4',
            fileName: 'report.pdf',
            margin: { top: '2cm', left: '1.5cm', right: '1.5cm', bottom: '2cm' },
            scale: 0.8
        }, () => document.querySelector('#test').remove())
    }

    //Another PDF printing method with jsPDF.
    const toPDF = () => {
        const doc = new jsPDF("p", "pt", "a4");
        doc.text(20,20,"This is the PDF");
        doc.save("sample.pdf")
    };

    return(
        <div id="example">
            <div className="box wide hidden-on-narrow">
                <div className="box-col">
                    <div className="header-custom-report">
                        <FontAwesomeIcon className="report-header-icon" color="#3e3b9d" size="3x" icon={faTimes} />
                        <h4>Report Generator</h4>
                    </div>
                </div>
            </div>
            <div className="page-container hidden-on-narrow">
                <PDFExport ref={pdfExportComponent} paperSize="A4">
                    <div ref={contentArea} className={ 'pdf-page size-a4' } id="container">
                        <div className="inner-page">
                            <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo" /> Tutor Video Resource Report
								</span>
                                <span className="invoice-number">Invoice #23543</span>
                            </div>
                            <div className="pdf-footer">
                                <p>
                                    SPM Management System.<br />
                                    Learning Management Automation System.<br />
                                    Colombo, Sri Lanka, 108080.
                                </p>
                            </div>
                            <div className="addresses">
                                <div className="for">
                                    <h3>File Overview</h3>
                                    <p>
                                        This report shows the file distribution in each course.
                                    </p>
                                </div>

                                <div className="from">
                                    <h6>Tutor Department</h6>
                                    <p>
                                        Resource Management.
                                    </p>
                                    <p>
                                        Report ID: 23543<br />
                                        Invoice Date: 12.03.2014<br />
                                        Due Date: 27.03.2014
                                    </p>
                                </div>
                            </div>
                            <div className="pdf-chart">
                                <Chart style={{ height: 280 }}>
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="donut"
                                            data={sampleData}
                                            categoryField="product"
                                            field="share"
                                        >
                                            <ChartSeriesLabels
                                                color="#fff"
                                                background="none"
                                            />
                                        </ChartSeriesItem>
                                    </ChartSeries>
                                </Chart>
                            </div>
                            <div className="pdf-body">
                                <div id="grid"></div>
                                <p className="signature">
                                    Signature: ________________ <br /><br />
                                    Date: 12.03.2014
                                </p>
                            </div>
                        </div>
                    </div>
                </PDFExport>
            </div>
            <div className="box wide hidden-on-narrow">
                <div className="box-col">
                    <div className="report-header-bold">Export the Report As PDF</div>
                    <DropDownList
                        data={ddData}
                        textField="text"
                        dataItemKey="value"
                        value={layoutSelection}
                        onChange={updatePageLayout}
                    >
                    </DropDownList>
                </div>
                <div className="box-col">
                    <div>Click the button to export as PDF</div>
                    <Button  onClick={handleExportWithMethod}>Export Method jsPDF</Button>
                    <Button  primary={true} onClick={handleExportWithComponent}>Export Component</Button>
                </div>
            </div>
        </div>
    );
}
export default TutoReportPage;
