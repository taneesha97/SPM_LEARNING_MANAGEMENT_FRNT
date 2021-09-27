import './VideoPlayerSection.scss'
import React from 'react'
import {Container} from "@material-ui/core";
import PlayerThumbnail from "../../../Pages/VideoResourcePage/PlayerThumbnail/PlayerThumbnail";
import CustomRow from "../CourseMgntInt/CustomRow/CustomRow";


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
                {array1?.map((item) => (
                    <PlayerThumbnail image={item.image} url={item.url}/>
                ))}
            </Container>
        </div>
    )
}

export default VideoPlayerSection
