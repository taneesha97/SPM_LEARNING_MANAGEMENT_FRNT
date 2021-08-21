import React from 'react'
import "./HomeLanding.css"
import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";

function HomeLanding() {
    return (
        <div>
            <p> This is the landing page! </p>
            <div>
                <ClassTile/>
            </div>
            <button>Payment</button>
            <p>Lol</p>
            <PaymentForm/>
        </div>
    )
}

export default HomeLanding
