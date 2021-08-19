import React from 'react'

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
import teacherDeleteimage1 from "../../Admin/TeachersTable/images/teacherDelete-image1.png";
function StudentTableComponent() {

    const rows = [
        { id: 1, name: 'Snow', email: 'Jon@gmail.com', username: 'Snow',password: 1234 },
        { id: 2, name: 'Lannister', email: 'Cersei@gmail.com',username: 'Lannister', password: 1234 },
        { id: 3, name: 'Lannister', email: 'Jaime@gmail.com',username: 'Snow', password: 1234 },
        { id: 4, name: 'Stark', email: 'Arya@gmail.com',username: 'Snow', password: 1234 },
        { id: 5, name: 'Targaryen', email: 'Daenerys@gmail.com', username: 'Snow', password: 1234 },
        { id: 6, name: 'Melisandre', email: 'ee@gmail.com', username: 'Snow', password: 1234 },
        { id: 7, name: 'Clifford', email: 'Ferrara@gmail.com', username: 'Snow', password: 1234 },
        { id: 8, name: 'Frances', email: 'Rossini@gmail.com', username: 'Snow', password: 1234 },
        { id: 9, name: 'Roxie', email: 'Harvey@gmail.com',username: 'Snow', password: 1234 },
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 1350,
            borderRadius: 30
        },
        editorContent: {
            borderRadius: 30
        },
        studentTableHeaderColumns: {
            color: 'white',
        },
    });
    const classes = useStyles();

    return (
        <div className="Student-table-background">

            <TableContainer component={Paper} className={classes.editorContent}>
                <h1 className="title-studentTable">Student Details Table</h1>
                <TextField
                    id="filled-full-width"
                    label="Search"
                    style={{ marginLeft: 20}}
                    placeholder="Search Items.."
                    fullWidth
                    margin="normal"
                    variant="filled"
                />
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="student-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>id</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>User Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Password</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Delete</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center"> {row.id} </TableCell>
                                    <TableCell align="center"> {row.name} </TableCell>
                                    <TableCell align="center"> {row.email} </TableCell>
                                    <TableCell align="center"> {row.username} </TableCell>
                                    <TableCell align="center"> {row.password} </TableCell>
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
