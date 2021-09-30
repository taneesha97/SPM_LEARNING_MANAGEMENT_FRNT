import React from "react";
import './styles.scss'
import Add from './add.svg'
import Pen from './pen.svg'

const Transaction = ({type}) =>{
    return (
        <div className='transaction-detail-container'>
            <div className='transaction-detail-main-header'>
                Transaction Details
            </div>
            <div className='transaction-data-container'>
                <div className='transaction-detail-sub-header'>
                    Card Details
                </div>
                <div className='current-data-field'>
                    <div>
                        Card No
                    </div>
                    <img className='data-edit-button' src={Pen}/>
                </div>
                <div className='add-new-data-field'>
                    <img className='button-icon' src={Add}/>
                    <div className="button-header">
                        Add Card Details
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Transaction;