import React, {useState} from "react";
import ReactModal from 'react-modal';
import './PaymentForm.css'
import classImage from './5 9.svg'
import Paypal from './paypal.svg'
import Amex from './amex.svg'
import Visa from './visa.svg'

function PaymentForm({row}) {

    const [show, setShow] = useState(false);

    const [courseid, setCourseid] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [doneby, setDoneby] = useState('');
    const [type, setType] = useState('');

    function SubmitPaymentRecord () {
        setCourseid(row.CID)
        setAmount(row.Amount)
        var today = new Date(), date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setDate(date1);
        setDescription('course enrollment');
        setDoneby('STU001');
        setType('income');

        const newPayment ={
            amount,
            courseid,
            date,
            description,
            doneby,
            type
        }
        console.log(newPayment);
    }


    const handleModal = () =>{ setShow(!show)}
    return(
        <div>
            <button className='payment-enroll-btn' onClick={() => handleModal()}>Buy</button>
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
                                <div className='heading-text'>{row.CName}</div>
                                <div className='sub-text'>{row.Teacher}</div>
                                <div className='sub-text'>{row.Description}</div>
                            </div>
                        </div>
                        <div className='MainMethodContainer'>
                            <div className='Main-heading'>Checkout</div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Amount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
                            </div>
                            <div className='value-container'>
                                <div className='Sub-heading'>Discount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
                            </div>
                            <hr></hr>
                            <div className='value-container'>
                                <div className='Sub-heading'>Total Amount :</div>
                                <div className='Sub-heading'>{row.Amount}</div>
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

                        <form  onSubmit={SubmitPaymentRecord} >
                            <div className='input-field-container'>
                                <input className='input-field' type='text' placeholder='Card Number' required/>
                                <div className='PaymentSubContainer'>
                                    <input className='input-field' type='text' placeholder='CVC' required/>
                                    <input className='input-field' type='month' placeholder='Exdate'/>
                                </div>
                                <input className='input-field' type='text' placeholder='Name on Card' required/>
                                <input className='input-field' type='email' placeholder='Email Address' required/>
                            </div>
                            <div className='input-button-container'>
                                <button className='input-button' type="submit">Pay Now</button>
                                <button className='input-button' onClick={handleModal}>Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
export default PaymentForm;