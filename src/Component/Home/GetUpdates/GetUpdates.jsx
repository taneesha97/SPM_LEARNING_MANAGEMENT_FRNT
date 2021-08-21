import React from 'react'
import './styles.css'

function GetUpdates() {
    return (
        <div className='main-warpper'>

            <div className='main-header'>
                Get new updates from our institute
            </div>
            <div className='address-form'>
                <input className='input-field' type='text' placeholder='Enter your email...'/>
                <button className='Subscribe-btn'>Subscribe</button>
            </div>
            <div className='sub-header'>Enter your email and subscribe to the mail service to say connected with us.</div>
        </div>
    )
};

export default GetUpdates
