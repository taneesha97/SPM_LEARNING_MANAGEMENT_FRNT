import React from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//     return { name, calories, fat, carbs, protein };
// }

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
        minWidth: 200,
    },
});

function ClassDetailsTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ClassDetailsTable;