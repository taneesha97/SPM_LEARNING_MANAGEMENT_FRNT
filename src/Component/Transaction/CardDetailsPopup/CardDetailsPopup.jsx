import React from "react";
import './styles.scss'

const CardDetailsPopup = () =>{

    const submitCardDetals = () =>{

    }

    return (
        <div className='card-details-wrapper'>

            <div className='card-details-header'>

            </div>
            <form className='' onclick={submitCardDetals}>
                <input className='input-styles'
                       placeholder='Card Details'
                       type='text'/>
                <input className='input-styles'
                       placeholder='Select your Bank'
                       type='date'/>
                <div className=''>
                    <input className='input-styles'
                           placeholder='Enter Your Account Number Here'
                           type='number'/>
                    <input className='input-styles'
                           placeholder='Enter Your Account Number Here'
                           type='number'/>
                </div>

                <div className=''>

                </div>

            </form>
        </div>
    )
}
export default CardDetailsPopup;