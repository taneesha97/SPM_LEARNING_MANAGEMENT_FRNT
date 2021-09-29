import React from 'react';
import { useRef, useState, useEffect } from 'react';
import sampleData from './SampleData/invoice-data.json'
import Logo from "./companyLogo/Logo.png";
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
import 'hammerjs';
import { Button } from '@material-ui/core';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './TutorReportPage.scss'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function TutoReportPage() {
    const pdfExportComponent = useRef(null);
    const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});

    const ddData = [{ text: "A4", value: "size-a4" },
        { text: "Letter", value: "size-letter" },
        { text: "Executive", value: "size-executive" }
    ];

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    const updatePageLayout = (event) => {
        setLayoutSelection(event.target.value);
    }

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
                <PDFExport ref={pdfExportComponent}>
                    <div className={ `pdf-page ${ layoutSelection.value }` }>
                        <div className="inner-page">
                            <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo" /> Tutor Video Resource Report
								</span>
                                <span className="invoice-number">Invoice #23543</span>
                            </div>
                            <div className="pdf-footer">
                                <p>
                                    Blauer See Delikatessen<br />
                                    Lützowplatz 456<br />
                                    Berlin, Germany,  10785
                                </p>
                            </div>
                            <div className="addresses">
                                <div className="for">
                                    <h3>Invoice For</h3>
                                    <p>
                                        Antonio Moreno<br />
                                        Naucalpan de Juárez<br />
                                        México D.F., Mexico, 53500
                                    </p>
                                </div>

                                <div className="from">
                                    <h3>From</h3>
                                    <p>
                                        Hanna Moos <br />
                                        Lützowplatz 456<br />
                                        Berlin, Germany,  10785
                                    </p>
                                    <p>
                                        Invoice ID: 23543<br />
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
                    <Button primary={true} onClick={handleExportWithComponent}>Export</Button>
                </div>
            </div>
        </div>
    );
}

export default TutoReportPage;
