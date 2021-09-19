import React, {useState, useRef} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Slider, Tooltip, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";
import screenfull from 'screenfull'

const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative"
    },
});

function CustomVideoPlayerComponent() {

    const [state, setState] = useState({
        playing:true,
        muted: true,
        volume: 0.5,
        playbackRate: 1.0,
        played:0,
        seeking: false
    })

    const classes = useStyles();
    const {playing, muted, volume, playbackRate, played, seeking} = state;
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);

    const handlePlayPause = () => {
        setState({...state, playing: !state.playing});
    }

    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

    const handleMute = () => {
        setState({...state, muted: !state.muted})
    }

    const handleVolumeChange = (e, newValue) => {
        setState({...state, volume:parseFloat(newValue /100),
        muted: newValue === 0 ? true: false,
        });
    };

    const handleVolumeSeekDown =  (e, newValue) => {
        setState({
            ...state,
            volume: parseFloat(newValue/ 100),
            muted: newValue === 0 ? true: false,
        })
    }

    const handlePlaybackRateChange = (rate) => {
        setState({...state, playbackRate: rate})
    }

    const toggleFullScreen = () => {
        screenfull.toggle(playerContainerRef.current);
    }

    const handleProgress = (changeState) => {
        if(!state.seeking){setState({...state, ...changeState});}
    };

    const handleSeekChange = (e, newValue) => {
        setState({...state, played: parseFloat(newValue/100)})
    }

    const handleSeekMouseDown = (e) => {
        setState({...state, seeking:true})
    }

    const handleSeekMouseUp = (e, newValue) => {
        setState({...state, seeking: false})
        playerRef.current.seekTo(newValue/100);
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
                <div ref={playerContainerRef} className={classes.playerWrapper}>
                    <ReactPlayer
                        width={"100%"}
                        url="https://www.youtube.com/watch?v=wGixQPuG1GY"
                        muted={muted}
                        playing={playing}
                        border-radius='16px'
                        overflow="hidden"
                        ref={playerRef}
                        volume={volume}
                        playbackRate={playbackRate}
                        onProgress={handleProgress}
                    />
                    <PlayerControls

                        onPlayPause={handlePlayPause}
                        playing={playing}
                        onRewind={handleRewind}
                        onFastForward={handleFastForward}
                        muted={muted}
                        onMute={handleMute}
                        onVolumeChange={handleVolumeChange}
                        onVolumeSeekDown={handleVolumeSeekDown}
                        volume={volume}
                        playbackRate={playbackRate}
                        onPlaybackRateChange={handlePlaybackRateChange}
                        onToggleFullScreen ={toggleFullScreen}
                        played={played}
                        onSeekMouseUp={handleSeekMouseUp}
                        onSeekMouseDown={handleSeekMouseDown}
                        onSeek={handleSeekChange}
                    />
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CustomVideoPlayerComponent;
