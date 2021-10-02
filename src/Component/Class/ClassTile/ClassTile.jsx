import React from 'react';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import './ClassFileStyles.css'
import {useHistory} from "react-router";
import {Card, CardMedia, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: 'cover',
    },
});

const ClassTile = (props) => {
    console.log('ROWS',props?.rows?.fullPath);
    const history = useHistory();
    // const { classes } = props;
    const classes = useStyles();
    const passData = () => {
        history.push('/singleclassview', { data: props?.rows })
    }
    // console.log(props.row.fullPath);
    return(
        <div className='class-tile-container' onClick={passData}>
            <div className='left-container'>
                <div className='main-heading'>{props?.rows?.name}</div>
                <div className='sub-heading'> {props?.rows?.description}</div>
            </div>
            <div className='right-container'>
                <Card >
                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    height="140"*/}
                    {/*    className={classes.media}*/}
                    {/*    image={require('D:/sliit/3rd Year/2nd sem/SPM/Assignment/SPM_LEARNING_MANAGEMENT_BACK_New/img/img_2.jpg')}>*/}
                    {/*</CardMedia>*/}
                </Card>
            </div>

        </div>
      )
}

export default ClassTile;
