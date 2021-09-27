import React from 'react'
import './style.css'
import volume from "./images/audio.png";
import AnnoucementDisplay from "./AnnoucementDisplay";
import ClassTile from "../Class/ClassTile/ClassTile";

function SingleClassAnnouncements() {

    const rows = [
        {"title1": 'Announcement',"title2": 'Consider Two Announcements – One announcement to let students know that you are actively\n' +
                'working on making adjustments to the course, and the second to let them know what the\n' +
                'course modifications are, once you have them completed. '},
        {"title1": 'Announcement',"title2": 'Consider Two Announcements – One announcement to let students know that you are actively\n' +
                'working on making adjustments to the course, and the second to let them know what the\n' +
                'course modifications are, once you have them completed. '},
        {"title1": 'Announcement',"title2": 'Consider Two Announcements – One announcement to let students know that you are actively\n' +
                'working on making adjustments to the course, and the second to let them know what the\n' +
                'course modifications are, once you have them completed. '},
        {"title1": 'Announcement',"title2": 'Consider Two Announcements – One announcement to let students know that you are actively\n' +
                'working on making adjustments to the course, and the second to let them know what the\n' +
                'course modifications are, once you have them completed. '},
      ]
    return (
        <div className="singleclassviewbackgroundann">
            <div className="header">
                <div>
                    <h1 style={{color: "white"}}>Announcements</h1>
                </div>
                <div >
                    <img src= {volume}  className="Pic"/>
                </div>
            </div>
            <div className="mt-5">
                {rows.map((row)=> (

                    <div className="mb-2">
                        <AnnoucementDisplay row = {row}/>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default SingleClassAnnouncements
