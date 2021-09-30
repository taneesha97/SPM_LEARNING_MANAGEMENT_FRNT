import './PrintableComponent.scss'
import {Button} from "@progress/kendo-react-buttons";
import {PDFExport} from "@progress/kendo-react-pdf";
import React from "react";
import Logo from "../../companyLogo/Logo.png";
import {Chart, ChartSeries, ChartSeriesItem, ChartSeriesLabels} from "@progress/kendo-react-charts";
import sampleData from "../../SampleData/invoice-data.json";
class PrintableComponent extends React.Component {

    render() {
        return (
            <div className="app-content">
                <div className="page-container hidden-on-narrow">
                        <div className={'pdf-page size-a4'} id="container">
                            <div className="inner-page">
                                <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo"/> Tutor Video Resource Report
								</span>
                                </div>
                                <div className="pdf-footer">
                                    <p>
                                        SPM Management System.<br/>
                                        Learning Management Automation System.<br/>
                                        Colombo, Sri Lanka, 108080.
                                    </p>
                                    <p className="signature">
                                        Signature: ________________ <br/><br/>
                                        Date: 12.03.2014
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
                                            Report ID: 23543<br/>
                                            Invoice Date: 12.03.2014<br/>
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
                                    <div className="custom-grid" id="grid">
                                        <div> Content Comes Here! </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default PrintableComponent;
