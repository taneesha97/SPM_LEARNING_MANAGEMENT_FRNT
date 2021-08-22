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
import {deleteUsers, fetchStudents} from "../../../Action/Users";
import teacherDeleteimage1 from "../../Admin/TeachersTable/images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";

const Student = (props) => (
    console.log(props.student),
        <TableRow>
            <TableCell align="center"> {props.student.id} </TableCell>
            <TableCell align="center"> {props.student.name} </TableCell>
            <TableCell align="center"> {props.student.email} </TableCell>
            <TableCell align="center"> {props.student.username} </TableCell>
            <TableCell align="center"> {props.student.password} </TableCell>
            <TableCell align="center"> {props.student.type} </TableCell>
            <TableCell align="center">
                <Link onClick={() => {
                    props.deleteStudent(props.student.id)}}> <p><img src= {studentDeleting1}  className="studentDelete-image1"/></p> </Link>
            </TableCell>
        </TableRow>
)


const StudentTableComponent = ()  => {
    const dispatch = useDispatch();

    const response = useSelector((state) => state.userDetails1.UserDetails.records.data);
    console.log(response);

    useEffect(() => {
        console.log('calling')
        dispatch(fetchStudents());
    },[])

    const deleteStudent = (id) => {
        dispatch(deleteUsers(id))
    }

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

    const studentList = () => {
        return response?.map(currentstudent => {
            return <Student student = {currentstudent} deleteStudent = {deleteStudent} key ={currentstudent._id}/>;
        })
    }

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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StudentTableComponent
