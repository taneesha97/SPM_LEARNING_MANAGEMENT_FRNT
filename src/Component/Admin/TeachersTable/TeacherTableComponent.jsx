
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
import './teacherTable.css'
import teacherDeleteimage1 from "./images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchTeachers, fetchUser} from "../../../Action/Users";
function TeacherTableComponent() {


    const dispatch = useDispatch();

    const response = useSelector((state) => state.userDetails1.UserDetails.records.data);
    console.log(response);

    useEffect(() => {
        console.log('calling')
        dispatch(fetchTeachers());
    },[])


    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 30,
        },
        teacherContent: {
            borderRadius: 30,
            maxWidth: "810%"
        },
        teacherTableHeaderColumns: {
            color: 'white',
            width: 200
        },
    });
    const classes = useStyles();

    return (
        <div className="Teacher-table-background">
            <div className="teacher-table-title-header">
                <h1 className="title-teacherTable">Teacher Details Table</h1>
                <div className="search-bar-teacher-table">
                    <TextField
                        id="filled-full-width"
                        label="Search"
                        placeholder="Search Items.."
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        className="search-teacher"
                        style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 30}}
                    />
                </div>

            </div>
            <TableContainer component={Paper} className={classes.teacherContent}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="teacher-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>id</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>User Name</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Password</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Delete</TableCell>
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
                                    <TableCell align="center">
                                        <Link> <p><img src= {teacherDeleteimage1}  className="teacherDelete-image1"/></p> </Link>
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

export default TeacherTableComponent
