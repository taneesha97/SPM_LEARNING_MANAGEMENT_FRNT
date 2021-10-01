import React, {useEffect, useState} from 'react'
import ChartSeries from "@progress/kendo-react-charts/dist/es/components/Series";
import ChartSeriesItem from "@progress/kendo-react-charts/dist/es/components/SeriesItem";
import ChartSeriesLabels from "@progress/kendo-react-charts/dist/es/components/series-item/Labels";
import ChartLegend from "@progress/kendo-react-charts/dist/es/components/Legend";
import {Chart} from "@progress/kendo-react-charts";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, getTeacherStatusCount, getUserCount} from "../../Action/Users";
import axios from "axios";
import * as api from "../../API";


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        padding: "auto",
    },
    container1: {
        padding: "auto",
    },
    container2: {
        marginBottom: "30px",
    },
    paper: {
        height: 200,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //elevation: 8
    }
}))

const TestingReport3 = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [response3, setResponse3] = useState([]);
    const response = useSelector((state) => state.userDetails1?.usercount?.data);
    console.log('ww ',response);




    const fetchEventDetails = async () => {
        const response2 = await axios.get(api.baseURL + 'teachercount/')
        setResponse3(response2?.data)
        console.log(response2?.data)
    }

    useEffect(() => {
        fetchEventDetails();
    }, [])
    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(getTeacherStatusCount());
    },[])

    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(getUserCount());
    },[])


    console.log(response3)

    // const donutCenterRenderer = () => (
    //     <span>
    //          <h3>22.5%</h3> of which renewables
    //     </span>
    // );

    const labelContent = (e) => e.category;

    const data = [
        {
        "kind": "Teachers", "share": response?.at(0) / response?.at(2)
        },
        {
            "kind": "Students", "share": response?.at(1) / response?.at(2)
        },
        {
            "kind": "Admins", "share": (response?.at(2) - (response?.at(1) + response?.at(0)) )/ response?.at(2)
        }
    ]

    const data1 = [
        {
            "kind": "valid: ", "share": response3?.at(0) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        },
        {
            "kind": "invalid ", "share": response3?.at(1) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        },
        {
            "kind": "pending", "share": response3?.at(2) / (response3?.at(0) + response3?.at(1) + response3?.at(2))
        }
    ]
    return (
        <div>
            <div className={classes.container}>
                <Grid container className={classes.container1} direction="column" alignItems="center" spacing={2}>
                    <Grid container className={classes.container2} spacing={16} alignItems="center" justify="flex-start">
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Chart >
                                <ChartSeries>
                                    <ChartSeriesItem
                                        type="donut"
                                        data={data}
                                        categoryField="kind"
                                        field="share"
                                    >
                                        <ChartSeriesLabels
                                            color="#fff"
                                            background="none"
                                            content={labelContent}
                                        />
                                    </ChartSeriesItem>
                                </ChartSeries>
                                <ChartLegend visible={false} />
                            </Chart>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Grid container direction="column" alignItems="center" spacing={2}>
                                    <h6>Total Users :{response?.at(2)} </h6>
                                    <h6>Total Teachers : {response?.at(0)} ({(response?.at(0) / response?.at(2)) * 100})%</h6>
                                    <h6>Total Students : {response?.at(1)} ({(response?.at(1) / response?.at(2)) * 100})%</h6>
                                    <h6>Total Admins : {(response?.at(2) - (response?.at(1) + response?.at(0)) )} ({((response?.at(2) - (response?.at(1) + response?.at(0)) ) / response?.at(2)) * 100})%</h6>
                                </Grid>

                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid className={classes.container2} container spacing={16} justify="flex-start">
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Chart >
                                <ChartSeries>
                                    <ChartSeriesItem
                                        type="donut"
                                        data={data1}
                                        categoryField="kind"
                                        field="share"
                                    >
                                        <ChartSeriesLabels
                                            color="#fff"
                                            background="none"
                                            content={labelContent}
                                        />
                                    </ChartSeriesItem>
                                </ChartSeries>
                                <ChartLegend visible={false} />
                            </Chart>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Grid container direction="column" alignItems="center" spacing={2}>
                                    <h6>Total Teachers : {response3?.at(0) + response3?.at(1) + response3?.at(2) } </h6>
                                    <h6>Total Valid Teachers : {response3?.at(0)} ({(response3?.at(0) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</h6>
                                    <h6>Total Invalid Teachers : {response3?.at(1)} ({(response3?.at(1) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</h6>
                                    <h6>Total Pending Teachers : {response3?.at(2)} ({(response3?.at(2) / (response3?.at(0) + response3?.at(1) + response3?.at(2))) * 100 }%)</h6>
                                </Grid>

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

            </div>

            

        </div>
    )
}

export default TestingReport3
