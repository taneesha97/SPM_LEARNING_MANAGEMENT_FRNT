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
import {sanitizeHtml} from "bootstrap/js/src/util/sanitizer";
import {CloudDownload} from "@material-ui/icons";
import axios from "axios";

// Axios call to get the data from the database.


const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "block",
        overflow: "hidden",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 600
    },
    container: {
        overflow: "scroll",
        scrollbarWidth: "none" /* Firefox */,
        fontWeight: 600,
        maxHeight: 420,
        "&::-webkit-scrollbar": {
            display: "none"
        } /* Chrome */
    }

});

export default function FileAttachmentTable() {

    const [tableoptions, setTableOptions] = useState([]);

    useEffect(() => {
        getItems();
    },[])
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

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell>URI</TableCell>
                        <TableCell>type</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Course</TableCell>
                        <TableCell>User Given Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableoptions?.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.uri}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.size}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.course}</TableCell>
                            <TableCell>{row.userGivenName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
