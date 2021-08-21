import React from 'react'
import "./HomeLanding.css"

import ClassSection from "./ClassSection/ClassSection";

import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import Footer from "../Footer/Footer";
import GetUpdates from "./GetUpdates/GetUpdates";
import TutorSection from "./TutorSection/TutorSection";

function HomeLanding() {
    return (
        <div>
            <WelcomeHeader/>
            <div className='ash-background'>
                <ClassSection/>
                <TutorSection/>
            </div>

            <button>Payment</button>
            <PaymentForm/>
            <GetUpdates/>
            <Footer/>
        </div>
    )
}

export default HomeLanding
