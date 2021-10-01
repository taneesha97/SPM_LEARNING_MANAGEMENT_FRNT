import React, {useEffect, useState} from 'react'
import {FormControl, InputLabel, MenuItem, styled, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Select from "react-select";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {fetchStudents, fetchUser} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import studentDeleting1 from "../Tutor/StudentTable/images/studentDelete-image1.png";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import * as tableCellClasses from "react-file-base64";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '60ch',
            margin: theme.spacing(1)
        }
    },
    paymentType: {
        width: '30ch',
        height: '4vw'
    },
    paymentType1: {
        width: '20ch',
        height: '4vw'
    },
    stage1: {
        marginBottom: '20px'
    },
    stage2: {
        marginLeft: '3px'
    },
    stage3: {
        padding: '70px',
        //marginLeft: '3px',
        marginBottom: '10px'
    },
    title1: {
        marginLeft: '3px'
    }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, age, email, status, type) {
    return { name, age, email, status, type };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TestingReport2 = () => {
    const dispatch = useDispatch();
    const [age, setAge] = useState("")
    const [age1, setAge1] = useState("")
    const [age2, setAge2] = useState(0)
    const classes = useStyles();

    useEffect(() => {
        //setPage(0);
        console.log('calling')
        dispatch(fetchUser());
    },[])

    const response = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
    console.log(response);

    const handleChange = (e) => {
        console.log('calling')
        response?.filter((val) => {
            //console.log('a ',val?.age, 'ww ', val)
            if(age.trim() < val?.age && age1.trim() > val?.age){
                             console.log(val)
                return val;
                         }
        })

    //     response?.filter((val) => {
    //         if(age.trim() < val.age && ){
    //             return val
    //         }
    //         // else if(val?.name.toLowerCase().includes(searchTerm.toLowerCase())){
    //         //     return val
    //         // }else if(val?.email.toLowerCase().includes(searchTerm.toLowerCase())){
    //         //     return val
    //         // }else if(val?.age.toLowerCase().includes(searchTerm.toLowerCase())){
    //         //     return val
    //         // }else if(val?.username.toLowerCase().includes(searchTerm.toLowerCase())){
    //         //     return val
    //         // }else if(val?.type.toLowerCase().includes(searchTerm.toLowerCase())){
    //         //     return val
    //         // }
    //     })
    //         .map((row) => (
    //             console.log(row),
    //
    //         ))
    // }
        //setValue(e.target.value)
    };
    return (
        <React.Fragment>

            <Grid className={classes.stage3} container direction="row" alignItems="left" spacing={8}>
                <Grid item>
                    <Grid item xs={12} sm={6}>
                        <TextField type="number" value={age} onChange={(e) => setAge(e.target.value)} className={classes.paymentType} id="outlined-basic" label="Age" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item xs={12} sm={6}>
                        <TextField type="number" value={age1} onChange={(e) => setAge1(e.target.value)}  className={classes.paymentType} id="outlined-basic" label="Age" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item xs={12} sm={6}>
                        <Button
                            style={{ marginLeft: "15px", width: "100px"}}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleChange}
                        >check </Button>
                    </Grid>
                </Grid>
            </Grid>

            <div style={{padding: '50px', marginLeft:'120px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right">Name</StyledTableCell>
                                    <StyledTableCell align="right">age</StyledTableCell>
                                    <StyledTableCell align="right">email</StyledTableCell>
                                    <StyledTableCell align="right">username</StyledTableCell>
                                    <StyledTableCell align="right">type</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {response?.filter((val) => {
                                    if (age.trim() === ''){
                                        return val;
                                    }else if (age1.trim() === ''){
                                        return val;
                                    }
                                    //console.log('a ',val?.age, 'ww ', val)
                                    else if(age.trim() < val?.age && age1.trim() > val?.age){
                                        console.log(val)
                                        return val;
                                    }
                                })

                                    .map((row) => (
                                    <StyledTableRow key={row?.id}>
                                        <StyledTableCell align="right">
                                            {row?.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row?.age}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.email}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.status}</StyledTableCell>
                                        <StyledTableCell align="right">{row?.type}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

            </div>

        </React.Fragment>
            

    )
}

export default TestingReport2
