import React from "react";
import './styles.scss'

const CardDetailsPopup = ({setShow}) =>{

    const submitCardDetals = () =>{

    }

    return (
        <div className='card-details-wrapper'>
            <div className='card-details-header'>
                Card Details
            </div>
            <form className='card-details-form' onclick={submitCardDetals}>
                <input className='input-styles'
                       placeholder='Card Details'
                       type='text'/>
                <div className=''>
                    <input className='input-styles'
                           type='date'/>
                    <input className='input-styles'
                           placeholder='Enter CVC'
                           type='number'/>

                </div>
                <input className='input-styles'
                       placeholder='Enter Your Account Number Here'
                       type='number'/>

                <div className='card-details-buttons'>
                    <button className='button-cancel-styles' onClick={() => setShow(false)}>Cancel</button>
                    <button className='button-submit-styles'>Add</button>
                </div>

            </form>
        </div>
    )
}
export default CardDetailsPopup;