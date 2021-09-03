import React, {useState} from 'react'
import "./HomeLanding.css"

import CustomizeSection from "./CustomizeSection/CustomizeSection";
import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import Footer from "../Footer/Footer";
import GetUpdates from "./GetUpdates/GetUpdates";
import TutorSection from "./TutorSection/TutorSection";

import CourseWelcomeHeader from "../WelcomeHeader-Course/CourseWelcomeHeader";

import PopupModel from "../PopupModel/PopupModel";




function HomeLanding() {

    const [show, setshow] = useState(false)

    return (
        <div>
            <div className='ash-background'>
                <WelcomeHeader/>
                <button onClick={() => setshow(true)}>Popup Modal</button>
                <PaymentForm/>
                <PopupModel show={show}>
                    <WelcomeHeader/>
                </PopupModel>


                <CustomizeSection main_topic={'Top Courses'} sub_topic={'Latest and Best selling courses, Enroll now for the full life time access.'} textcolor={'#717171'}backgroundcl={'#D6D6D6'} btn_text={'View All'} btn_color={'#8340F4'}>
                </CustomizeSection>
            </div>
            <div className='dark-ash-background'>
                <CustomizeSection path = {"/class"} main_topic={'Classes'} sub_topic={'Latest Classes, Enroll now for the full life time access.'} backgroundcl={'#ADA6CE'} btn_text={'View All'} btn_color={'#8340F4'}/>
                <TutorSection/>
            </div>
            <GetUpdates/>
            <Footer/>
        </div>
    )
}

export default HomeLanding
