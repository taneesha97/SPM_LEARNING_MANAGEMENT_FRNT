import React, {useState} from "react";
import './styles.scss'
import Add from './add.svg'
import Pen from './pen.svg'
import PopupModel from "../../PopupModel/PopupModel";
import BankDetailsPopup from "../BankDetailsPopup/BankDetailsPopup";
import CardDetailsPopup from "../CardDetailsPopup/CardDetailsPopup";

const Transaction = ({type}) =>{

    const [show, setShow] = useState(false)

    return (
        <div className='transaction-detail-container'>
            <div className='transaction-detail-main-header'>
                Transaction Details
            </div>
            <div className='transaction-data-container'>
                <div className='transaction-detail-sub-header'>
                    {type + ' Details'}
                </div>
                <div className='current-data-field'>
                    <div>
                        {type + ' No'}
                    </div>
                    <img className='data-edit-button' src={Pen}/>
                </div>
                <div className='add-new-data-field' onClick={() => setShow(!show) }>
                    <img className='button-icon' src={Add}/>
                    <div className="button-header" >
                        {'Add ' +type + ' Details'}
                    </div>
                    <PopupModel show={show}>
                        {type === 'Card' ? <BankDetailsPopup  setShow={setShow}/> : <CardDetailsPopup setShow={setShow}/>}
                    </PopupModel>
                </div>
            </div>
        </div>
    )

}

export default Transaction;