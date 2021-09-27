import './VideoPlayerSection.scss'
import React from 'react'
import {Container} from "@material-ui/core";
import PlayerThumbnail from "../../../Pages/VideoResourcePage/PlayerThumbnail/PlayerThumbnail";
import CustomRow from "../CourseMgntInt/CustomRow/CustomRow";
import Grid from "@material-ui/core/Grid";


function VideoPlayerSection() {

    const array1 =[
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        ];

    return (
        <div>
            <div style={{marginTop: "20px"}}/>
            <Container maxWidth="md">
                <p className="header-video-player">Course Videos</p>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                {array1?.map((item) => (
                    <Grid item xs={7} md={3} xl={3} sm={4}>
                        <PlayerThumbnail image={item.image} url={item.url}/>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </div>
    )
}

export default VideoPlayerSection
