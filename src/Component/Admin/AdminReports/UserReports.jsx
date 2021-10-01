import React, {useState} from 'react'
import AnnouncementSection from "../AnnouncementSection/AnnouncementSection";
import AdminDashHeader from "../Header/AdminDashHeader";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {useHistory} from "react-router";

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
    titlecontainer: {
        marginLeft: '3px',
        padding: 'auto',

    },
    title1: {
        color:'#FFFFFF',
        font: '4vw'
    },
    title2: {
        color:'#FFFFFF',
        font: '4vw',
        marginLeft: "70px"
    },
    header: {
        background: '#A0E7E5'
    },
    interface: {
        background: '#525252',
        borderRadius: '30px'
    }
}))
function UserReports() {

    const [age, setAge] = useState("")
    const [age1, setAge1] = useState("")
    const classes = useStyles();
    const history = useHistory();

    const handleChange = () => {
        console.log(age)
        console.log(age1)
        ///report
        //, { data: props?.rows }
        history.push('/report', { age: age, age1: age1 });

    }

    return (
        <div>
            <h1 className={classes.title2}>Teacher Details Table</h1>
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
        </div>
    )
}

export default UserReports