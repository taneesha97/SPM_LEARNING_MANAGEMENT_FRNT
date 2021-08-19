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
import './teacherTable.css'
import teacherDeleteimage1 from "./images/teacherDelete-image1.png";
function TeacherTableComponent() {

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
            //marginTop: '3%',
            borderRadius: 30
        },
        teacherContent: {
            borderRadius: 30
        },
        teacherTableHeaderColumns: {
            color: 'white',
        },
    });
    const classes = useStyles();

    return (
        <div className="Teacher-table-background">

            <TableContainer component={Paper} className={classes.teacherContent}>
                <h1 className="title-teacherTable">Teacher Details Table</h1>
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
                    <TableHead className="teacher-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>id</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>User Name</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Password</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Delete</TableCell>
                            <TableCell align="center" className={classes.teacherTableHeaderColumns}>Update</TableCell>
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
                                        <Link> <p><img src= {teacherDeleteimage1}  className="teacherDelete-image1"/></p> </Link>
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

export default TeacherTableComponent
