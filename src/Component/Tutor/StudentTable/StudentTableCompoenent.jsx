import React, {useEffect} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import {makeStyles, TextField} from "@material-ui/core";
import './studentTable.css'
import studentDeleting1 from "./images/studentDelete-image1.png";
import {fetchStudents} from "../../../Action/Users";
import teacherDeleteimage1 from "../../Admin/TeachersTable/images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";



const StudentTableComponent = ()  => {
    const dispatch = useDispatch();

    const response = useSelector((state) => state.userDetails1.UserDetails.records.data);
    console.log(response);

    useEffect(() => {
        console.log('calling')
        dispatch(fetchStudents());
    },[])



    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 30,

        },
        editorContent: {
            borderRadius: 30,
            maxWidth: "810%"
        },
        studentTableHeaderColumns: {
            color: 'white',
            width: 200
        },
    });
    const classes = useStyles();

    return (
        <div className="Student-table-background">
            <div className="student-table-title-header">
                <h1 className="title-studentTable">Student Details Table</h1>
                <div className="search-bar-student-table">
                    <TextField
                        id="filled-full-width"
                        label="Search"
                        placeholder="Search Items.."
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        className="search-student"
                        style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 2}}
                    />
                </div>
            </div>



            <TableContainer component={Paper} className={classes.editorContent}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="student-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>id</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>User Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Password</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>type</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Delete</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            response?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center"> {row.id} </TableCell>
                                    <TableCell align="center"> {row.name} </TableCell>
                                    <TableCell align="center"> {row.email} </TableCell>
                                    <TableCell align="center"> {row.username} </TableCell>
                                    <TableCell align="center"> {row.password} </TableCell>
                                    <TableCell align="center"> {row.type} </TableCell>
                                    <TableCell align="center">
                                        <Link> <p><img src= {studentDeleting1}  className="studentDelete-image1"/></p> </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link> <p>Update</p> </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StudentTableComponent
