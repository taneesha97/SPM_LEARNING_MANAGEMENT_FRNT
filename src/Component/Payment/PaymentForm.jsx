import React, {useState} from "react";
import ReactModal from 'react-modal';
import './PaymentForm.css'
import classImage from './5 9.svg'
import Paypal from './paypal.svg'
import Amex from './amex.svg'
import Visa from './visa.svg'

function PaymentForm() {

    const [show, setShow] = useState(false);

    const handleModal = () =>{ setShow(!show)}
    return(
        <div>
            <button onClick={() => handleModal()}>Trigger Modal</button>
            <ReactModal
                isOpen={show}
                contentLabel="Minimal Modal Example"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={handleModal}
            >

                <div className='MainModalContainer'>
                    <div className='MainModalSideContainer'>
                        <div className='MainClassContainer'>
                            <img className='MainImage' src={classImage}/>
                            <div className='Textcontainer'>
                                <div className='heading-text'>Grade 10</div>
                                <div className='sub-text'>Class</div>
                                <div className='sub-text'>Description</div>
                            </div>
                        </div>
                        <div className='MainMethodContainer'>
                            <div className='Main-heading'>Checkout</div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Amount :</div>
                                <div className='Sub-heading'>99.99$</div>
                            </div>
                            <div className='value-container'>
                                <div className='Sub-heading'>Discount :</div>
                                <div className='Sub-heading'>9.99$</div>
                            </div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Total Amount :</div>
                                <div className='Sub-heading'>90.00$</div>
                            </div>

                            <hr/><hr/>
                            <div className='payment-input-button-container'>
                                <button className='input-button'>Pay Now</button>
                                <div className='Sub-heading gray-text'>or Pay with</div>
                                <button className='paypal-button' onClick={handleModal}>
                                    <img src={Paypal}/>
                                </button>
                                <button className='my-card-button' onClick={handleModal}>My Card</button>

                            </div>

                        </div>
                    </div>
                    <div className='PaymentContainer'>
                        <div className='main-payament-from-header'>
                            <h3 className='PaymentContainerHeader'>Payment</h3>
                            <div className='image-container'>
                                <img src={Amex}/>
                                <img src={Visa}/>
                            </div>

                        </div>

                        <div className='input-field-container'>
                            <input className='input-field' type='text' placeholder='Card Number'/>
                            <div className='PaymentSubContainer'>
                                <input className='input-field' type='text' placeholder='CVC'/>
                                <input className='input-field' type='month' placeholder='Exdate'/>
                            </div>
                            <input className='input-field' type='text' placeholder='Name on Card'/>
                            <input className='input-field' type='text' placeholder='Email Address'/>
                        </div>
                        <div className='input-button-container'>
                            <button className='input-button'>Pay Now</button>
                            <button className='input-button' onClick={handleModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
export default PaymentForm;