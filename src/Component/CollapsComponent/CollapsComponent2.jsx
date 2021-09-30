import React, {useState} from "react";
import './collapseClassroom.css'
import collapseImage from './images/collapseImage.png'
import BlueScreen6 from "./BlueScreen6";
import BlueScreen7 from "./BlueScreen7";


const CollapsComponent2 = () => {

    const [selected , setSelected] = useState(false)
    const handleClick = () => { setSelected(!selected)}

    return (
        <React.Fragment>
            <div  className={"containermain " + (selected ? "expand" : "")} onClick={handleClick} data-testid="containermain">
                <div className="upper">
                    <img src= {collapseImage}  className="collapseImage1"/>
                    {/*{value.Heading}*/}
                    <div className="collapse-info1">
                        <h2 className="collapse-info1-main">2021 Grade 11 class</h2>
                        <h4 className="collapse-info1-second">Grade 11 is a very important year.
                            It is the year students begin to meet their graduation requirements. In grade 10,
                            English Language Arts: Composition 10, New Media - and Creative Writing coming Sept. 2021
                            Social Studies 10
                            Mathematics 10...
                            </h4>
                    </div>

                </div>
                <div className="lower" data-testid="container-lower">
                    <div className="listOfBluescreen6">
                        <BlueScreen6/><br/>
                        <BlueScreen7/>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}

export default CollapsComponent2