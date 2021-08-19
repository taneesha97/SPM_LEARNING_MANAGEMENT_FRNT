import React, {useState} from "react";
import './collapseClassroom.css'
import collapseImage from './images/collapseImage.png'

// const CollapsComponent = ({value}) => {
const CollapsComponent = () => {

    const [selected , setSelected] = useState(false)
    const handleClick = () => { setSelected(!selected)}

    return (
        <div  className={"containermain " + (selected ? "expand" : "")} onClick={handleClick} data-testid="containermain">
            <div className="upper" data-testid="container-upper">

                <h3 data-testid="container-des">
                    {/*{value.Heading}*/}
                    <div className="collapse-info1">
                        <h2 className="collapse-info1-main">2021 Grade 10 class</h2>
                        <h4 className="collapse-info1-second">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Curabitur nec dignissim sem. Donec sed justo rutrum,
                            vehicula elit a, pulvinar sem. Proin convallis, orci vel blandit luctus,
                            massa lectus blandit neque, sit amet pharetra libero lacus et arcu.
                            Donec placerat lacinia nunc vel faucibus..</h4>
                    </div>
                    <img src= {collapseImage}  className="collapseImage1"/>

                </h3>
            </div>
            <div className="lower" data-testid="container-lower">
                <p data-testid="container-lower-header">heading</p>
                <h3 data-testid="container-lower-des">
                    {/*{value.Total}*/}
                    total
                </h3>
            </div>
        </div>
    )
}

export default CollapsComponent