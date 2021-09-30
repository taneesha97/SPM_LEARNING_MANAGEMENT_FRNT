import React from "react";
import './styles.scss'

const BankDetailsPopup = ({setShow}) => {

    const submitBankDetals = () =>{

    }
    return(
        <div className='bank-details-wrapper'>
            <div className='bank-details-header'>
                Bank Details
            </div>
            <form className='bank-details-form' onclick={submitBankDetals}>
                <input className='input-styles'
                       placeholder='Enter Your Name Here'
                       type='text'/>
                <input className='input-styles'
                       placeholder='Select your Bank'
                       type='text'/>
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
export default BankDetailsPopup;