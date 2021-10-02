import './CourseReport.scss'
import React from "react";
import Logo from "../../../../Pages/TutorReportPage/companyLogo/Logo.png";
import axios from "axios";
import CourseReportTable from "./DataSet/SampleTable/CourseReportTable";
class CourseReport extends React.Component {

    state = {
        graphData: []
    }

    // Async method to return the data.
    // Plug the data to the chart.
    async componentDidMount() {
        await axios.get(`http://localhost:8073/api/tutor/charts`)
            .then(res => {
                const graphData = res.data;
                this.setState({graphData});
            })
        console.log(this.state.graphData); // Testing.
    }

    render() {
        return (
            <div className="app-content">
                <div className="page-container hidden-on-narrow">
                        <div className={'pdf-page size-a4'} id="container">
                            <div className="inner-page">
                                <div className="pdf-header">
								<span className="company-logo">
									<img className="company-image" src={Logo} alt="Kendoka Company Logo"/> Tutor Course  Report
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
                                        <h3>Course Report</h3>
                                        <p>
                                            Following courses are active and published in the system under current user.
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
                                    <CourseReportTable/>
                                </div>
                                <div className="pdf-body">
                                    <div className="custom-grid" id="grid">
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default CourseReport;
