import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

export default function CourseContent() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>English-Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Here display the tutors name for the particular class
                        <p>T.K.T.A.CHANADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Maths-Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Here display the tutors name for the particular class
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Music-Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Here display the tutors name for the particular class
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>History-Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Here display the tutors name for the particular class
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                        <p>T.K.T.A.CHNADRASENA</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}



