import React, {useEffect, useState} from 'react'

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
import {deleteUsers, fetchStudents, getUserByID} from "../../../Action/Users";
import teacherDeleteimage1 from "../../Admin/TeachersTable/images/teacherDelete-image1.png";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";



const StudentTableComponent = ()  => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    //const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const response = useSelector((state) => state.userDetails1.UserDetails.records.data);
    console.log(response);
    const [filteredData, setFilteredData] = useState(response);

    useEffect(() => {
        setPage(0);
        console.log('calling')
        dispatch(fetchStudents());
    },[])

    const deleteStudent = (id) => {
        dispatch(deleteUsers(id))
        setTimeout(function(){
            dispatch(fetchStudents());
            }, 3000);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);

        setPage(0);
    };
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

                    {/*<input type="text" id="search" name="search" placeholder="search by name.."*/}
                    {/*       className="search-student"*/}
                    {/*       value={searchTerm}*/}
                    {/*       onChange={(event) => setSearchTerm(event.target.value)}*/}
                    {/*       required={true}*/}
                    {/*/>*/}
                    <TextField
                        //label="Search"
                        placeholder="Search by name.."

                        margin="normal"

                        className="search-student"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        style={{backgroundColor: "#FFFFFF", width: 300, borderRadius:30, height: 30, paddingLeft: 10}}
                    />
                </div>
            </div>



            <TableContainer component={Paper} className={classes.editorContent}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="student-table-header">
                        <TableRow >
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Email</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Age</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>User Name</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>type</TableCell>
                            <TableCell align="center" className={classes.studentTableHeaderColumns}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {response?.filter((val) => {
                            if(searchTerm == ""){
                                return val
                            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                            console.log(row),
                                <TableRow>
                                    <TableCell align="center"> {row.name} </TableCell>
                                    <TableCell align="center"> {row.email} </TableCell>
                                    <TableCell align="center"> {row.age} </TableCell>
                                    <TableCell align="center"> {row.username} </TableCell>
                                    <TableCell align="center"> {row.type} </TableCell>
                                    <TableCell align="center">
                                        <a onClick={() => {
                                            deleteStudent(row.id)}} > <img src= {studentDeleting1}  className="studentDelete-image1"/> </a>
                                    </TableCell>
                                </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={filteredData ? filteredData.length : 1}
                rowsPerPage={rowsPerPage}
                page={page}
                //classes={{ ul: classes.ul }}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                component="div"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                //className={classes.table}
            />
        </div>
    )
}

export default StudentTableComponent
