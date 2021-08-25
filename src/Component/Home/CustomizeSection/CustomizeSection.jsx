import React from 'react'
import ClassTile from "../../Class/ClassTile/ClassTile";
import './styles.css'
import {useHistory} from "react-router";

const CustomizeSection = ({main_topic, sub_topic, backgroundcl, btn_text, btn_color, textcolor, children, path}) => {

    const backgroundStyle = {backgroundColor: backgroundcl};
    const textparagraphcolor = {color: textcolor};
    const buttonStyle = {backgroundColor: btn_color};
    const history = useHistory();
    const navgation = () => {
        history.push(path);
    }

    return (
        <div className='section-main-wrapper' style={backgroundStyle}>
            <div className='section-header'>
                <div className='topic-section'>
                    <div className='main-topic'>{main_topic}</div>
                    <div className='sub-topic' style={textparagraphcolor}>{sub_topic}</div>
                </div>
                <button onClick={navgation} className='view-all-btn' style={buttonStyle}>{btn_text}</button>
            </div>
            <div className='section-body'>
                {children}
            </div>
        </div>
    )


}

export default CustomizeSection;