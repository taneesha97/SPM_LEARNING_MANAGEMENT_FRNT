import React from 'react'
import "./HomeLanding.css"
import PaymentForm from "../Payment/PaymentForm";

function HomeLanding() {
    return (
        <div  className='mainDiv'>
            <p> This is the landing page! </p>

            <button>Payment</button>
            <p>Lol</p>
            <PaymentForm/>
        </div>
    )
}

export default HomeLanding
