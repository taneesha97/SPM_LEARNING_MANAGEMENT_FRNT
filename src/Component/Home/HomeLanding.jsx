import React from 'react'
import "./HomeLanding.css"

import ClassSection from "./ClassSection/ClassSection";

import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";


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
        </div>
    )
}

export default HomeLanding
