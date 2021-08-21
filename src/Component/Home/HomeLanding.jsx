import React from 'react'
import "./HomeLanding.css"

import ClassSection from "./ClassSection/ClassSection";

import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import TutorSection from "./TutorSection/TutorSection";


function HomeLanding() {
    return (
        <div>
            <p> This is the landing page! </p>
            <div>
                <ClassSection/>
            </div>
            <TutorSection/>
            <button>Payment</button>
            <p>Lol</p>
            <PaymentForm/>
        </div>
    )
}

export default HomeLanding
