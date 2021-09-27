import React, {useState} from 'react'
import './AnnouncementTable.css'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {makeStyles, TableCell, TextField} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {getClasses} from "../../../../Action/Class";
import {getAnnouncements} from "../../../../Action/Announcement";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {green} from "@material-ui/core/colors";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import './AnnouncementTable.css';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.info.dark,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function AnnouncementTable({array}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupId, setPopupId] = useState("");
    const [popupStatus, setPopupStatus] = useState("");
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const annDetails = useSelector((state) => state.Announcement?.announcementRecords?.records);
    console.log('CLASS DETAIL', annDetails);

    React.useEffect(() => {
        console.log('Calling ann');
        dispatch(getAnnouncements());
    }, []);

    const useStyles = makeStyles({
        table: {
            maxWidth: "710%",
            borderRadius: 8.74,
        },
        annContent: {
            borderRadius: 8.74,
            maxWidth: "810%"
        },
        annTableHeaderColumns: {
            color: 'white',
            width: '500px',

        },

    });

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="ann-table-background">
                <div className="ann-table-title-header">
                    <h1 className="ann-teacherTable">Announcement Details Table</h1>
                    <div className="ann-bar-teacher-table">
                        <TextField
                            placeholder="Search by name.."
                            margin="normal"
                            className="search-teacher"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 8.74, height: 30, paddingLeft: 10}}
                        />
                    </div>
                </div>
                <TableContainer component={Paper} className={classes.annContent}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className="ann-table-header">
                            <TableRow >
                                <TableCell align="center" className={classes.annTableHeaderColumns}>Class Name</TableCell>
                                <TableCell align="center" className={classes.annTableHeaderColumns}>Announcement Header</TableCell>
                                <TableCell align="center" className={classes.annTableHeaderColumns}>Announcement Body</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {annDetails ?.filter((val) => {
                                if(searchTerm == ""){
                                    return val
                                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                            })
                                // slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    console.log(row),
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell align="center">{row.header}</StyledTableCell>
                                            <StyledTableCell align="center">{row.body}</StyledTableCell>
                                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={10}
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
        </React.Fragment>

    )
}
export default AnnouncementTable






