import React, {useEffect, useState} from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Button, IconButton} from "@material-ui/core";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from "@material-ui/core/TableFooter";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 400
    },
    tableContainer: {
        borderRadius: 30,
        margin: '5px 10px 10px 10px',
        maxWidth: "98%",
        maxHeight: 500,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark, // Change the background color to pink.
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize: 18,
        marginLeft: 10
    },

    tableFooterCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark, // Change the background color to pink.
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize: 18,
        marginLeft: 10,
        width: 100,
    },

    name : {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    course: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: '3px 10px',
        display: 'inline-block',
    },
    pagination: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),

    }
}))






export default function FileAttachmentTable({status}) {
    const [tableoptions, setTableOptions] = useState([]);

    useEffect(() => {
        getItems();
    },[status])
    async function getItems () {
        const response = await axios.get("http://localhost:8073/api/files");
        const data = response.data;
        const options = data.map(item => ({
            "name" : item.name,
            "uri" : item.uri,
            "type" : item.type,
            "size" : item.size,
            "price" : item.price,
            "description" : item.description,
            "course" : item.course,
            "userGivenName" : item.userGivenName,
        }))
        setTableOptions(options);
    }

    // File Download method.
    async function downloadFiles (imageName) {
        fetch(`http://localhost:8073/api/download/${imageName}`)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = `${imageName}`;
                    a.click();
                });
                //window.location.href = response.url;
            });
    }

    //Styles.
    const classes = useStyles();

    //Table Pagination Controls
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>File Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>User Given Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>type</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Size</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Price</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Description</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Course</TableCell>
                        <TableCell className={classes.tableHeaderCell}>URI</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableoptions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell className={classes.name} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography color="textSecondary" variant="subtitle1">{row.userGivenName}</Typography></TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography color="textSecondary" variant="subtitle1">{row.type}</Typography></TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography color="textSecondary" variant="subtitle1">{row.size}</Typography></TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography color="textSecondary" variant="subtitle1">{row.price}</Typography></TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography color="textSecondary" variant="subtitle1">{row.description}</Typography></TableCell>
                            <TableCell style={{overflow: "hidden"}}><Typography className={classes.course} style={
                                {
                                    backgroundColor: ((row.course === 'English' && 'green') || (row.course === 'Sinhala' && 'blue') || (row.course === 'Tamil' && 'yellow'))
                                }
                            } color="textSecondary" variant="subtitle1">{row.course}</Typography></TableCell>

                            <TableCell><Button style={{backgroundColor: "red", borderRadius: '10px'}} onClick={() => downloadFiles(`${row.name}`)} value="Download">Download</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className={classes.tableFooterCell}>
                    <TablePagination
                        className={classes.pagination}
                        rowsPerPageOptions={[4,5]}
                        component="div"
                        count={tableoptions.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
