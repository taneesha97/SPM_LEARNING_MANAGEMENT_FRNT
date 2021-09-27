import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { red } from "@material-ui/core/colors";
import {Button, IconButton} from "@material-ui/core";
import {sanitizeHtml} from "bootstrap/js/src/util/sanitizer";
import DeleteIcon from "@material-ui/icons/Delete";
import DownloadFile from "../../../Downloads/DownloadFile";
import {CloudDownload} from "@material-ui/icons";

const columns = [
    { id: "FileName", label: "File Name", minWidth: 170 },
    { id: "Description", label: "Course Name", minWidth: 100 },
    {
        id: "Course",
        label: "Medium",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "FileSize",
        label: "File Size",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2)
    },
    {
        id: "density",
        label: "Download Link",
        minWidth: 170,
        align: "right",
        format: sanitizeHtml
    }
];
// Creating a Model for the table. (Template)
function courseData(FileName, Description, Course, FileSize, DownloadButton) {
    return { FileName, Description, Course, FileSize, DownloadButton };
}

const rows = [
    courseData("Tutorial 3", "English", "English", 301340),
    courseData("Tutorial 3", "English", "English", 301340),
    courseData("Tutorial 3", "English", "English", 301340),
    courseData("Tutorial 3", "English", "English", 301340),
    courseData("Tutorial 3", "English", "English", 301340),
    courseData("Tutorial 3", "English", "English", 301340),
];

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#7364B9",
        color: theme.palette.common.white,
        fontWeight: 600
    },
    body: {
        fontSize: 15,

    }
}))(TableCell);

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
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <StyledTableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === "density" ?
                                                        <IconButton color="#000"
                                                        aria-label="delete"
                                                        className={classes.margin}><CloudDownload htmlColor="#7364B9" /></IconButton>
                                                        :
                                                        value
                                                    }
                                                </TableCell>
                                            );
                                        })}
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
