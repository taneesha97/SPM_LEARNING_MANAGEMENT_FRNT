import React from 'react'
import "./HomeLanding.css"

import ClassSection from "./ClassSection/ClassSection";

import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import Footer from "../Footer/Footer";
import GetUpdates from "./GetUpdates/GetUpdates";



function HomeLanding() {
    return (
        <div>
            <WelcomeHeader/>
            <div>
                <ClassSection/>
            </div>
            <button>Payment</button>
            <p>Lol</p>
            <PaymentForm/>
            <GetUpdates/>
            <Footer/>
        </div>
    )
}

export default HomeLanding
