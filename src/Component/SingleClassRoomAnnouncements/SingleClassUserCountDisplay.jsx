import React from 'react'
import './style.css'
import SingleClassUserCountDisplayInterface1 from "./SingleClassUserCountDisplayInterface1";
import AnnoucementDisplay from "./AnnoucementDisplay";
import presentation from './images/presentation(1).png'
function SingleClassUserCountDisplay() {
    const rows = [
        {"title1": 'Total Students',"title2": '5000', "image": presentation},
        {"title1": 'Total Tutors',"title2": '30', "image": presentation},

    ]
    return (
        <div className="singleclassusercountdisplay">
            {rows.map((row)=> (

                <div className="mb-2">
                    <SingleClassUserCountDisplayInterface1 row = {row}/>
                    {/*<AnnoucementDisplay row = {row}/>*/}
                </div>

            ))}


        </div>
    )
}

export default SingleClassUserCountDisplay
