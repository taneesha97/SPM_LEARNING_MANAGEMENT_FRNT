import React from 'react'
import './style.css'
import Background from './background.svg'
import {useHistory} from "react-router";

function WelcomeHeader() {

    const history = useHistory();

    const LoginNav = () => {
        history.push('./login')
    }

    const RegistrationNav = () => {
        history.push('./registration')
    }
    return (
        <div className='welcome-container'>
            <div className='landing-background'>
                <img src={Background} className='welcomebackground'/>
                <div className='welcomebackground-surface'>
                    <div className='main-header'>Welcome to the<br/> Learning Mangement<br/> System</div>
                    <div className='sub-header'>Register Now to the <br/>Learning Mangement System</div>
                    <div className='button-container'>
                        <button onClick={LoginNav} className='login-btn'>Login</button>
                        <button onClick={RegistrationNav} className='register-btn'>Register</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WelcomeHeader
