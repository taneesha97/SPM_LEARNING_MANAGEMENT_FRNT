import React, {useState} from "react";
import ReactModal from 'react-modal';
import './PaymentForm.css'
import classImage from './5 9.svg'

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
                        </div>
                        <div className='MainMethodContainer'>
                            <h3>check out</h3>
                            <hr></hr>
                            <p>Amount :</p>
                            <p>Discount :</p>
                            <hr></hr>
                            <p>Total Amount</p>
                            <hr/><hr/>

                        </div>
                    </div>
                    <div className='PaymentContainer'>
                        <h3>Payment</h3>
                        <input className='input-field' type='text' placeholder='Card Number'/>
                        <div className='PaymentSubContainer'>
                            <input className='input-field' type='text' placeholder='CVC'/>
                            <input className='input-field' type='month' placeholder='Exdate'/>
                        <div/>
                        <input className='input-field' type='text' placeholder='Name on Card'/>
                        <input className='input-field' type='text' placeholder='Email Address'/>
                        </div>
                    <button className='input-button'>Pay Now</button>
                        <button className='input-button' onClick={handleModal}>Cancel</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
export default PaymentForm;