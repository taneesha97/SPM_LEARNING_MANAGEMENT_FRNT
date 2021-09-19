import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Slider, Tooltip, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";

const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative"
    },
});

function CustomVideoPlayerComponent() {

    const [state, setState] = useState({
        playing:true
    })

    const classes = useStyles();
    const {playing} = state;

    const handlePlayPause = () => {
        setState({...state, playing: !state.playing});
    }

    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">React Video Player</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Container maxWidth="md">
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        width={"100%"}
                        url="https://www.youtube.com/watch?v=wGixQPuG1GY"
                        muted={true}
                        playing={playing}
                        border-radius='16px'
                        overflow="hidden"
                    />
                    <PlayerControls

                        onPlayPause={handlePlayPause}

                    />
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CustomVideoPlayerComponent;
