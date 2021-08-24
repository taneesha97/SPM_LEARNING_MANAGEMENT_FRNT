import React from 'react'
import ClassTile from "../../Class/ClassTile/ClassTile";
import './styles.css'

const CustomizeSection = ({main_topic, sub_topic, backgroundcl, btn_text, btn_color, children}) => {

    const backgroundStyle = {backgroundColor: backgroundcl};
    const buttonStyle = {backgroundColor: btn_color};

    return (
        <div className='section-main-wrapper' style={backgroundStyle}>
            <div className='section-header'>
                <div className='topic-section'>
                    <div className='main-topic'>{main_topic}</div>
                    <div className='sub-topic'>{sub_topic}</div>
                </div>
                <button className='view-all-btn' style={buttonStyle}>{btn_text}</button>
            </div>
            <div className='section-body'>
                {children}
            </div>
        </div>
    )


}

export default CustomizeSection;