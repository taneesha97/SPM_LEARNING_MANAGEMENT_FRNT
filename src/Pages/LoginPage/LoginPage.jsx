import React, {useState} from 'react'
import Login from "../../Component/Login/Login";
import LoginComponent from "../../Component/Login/LoginComponent";
import './style.css'
import ClassTile from "../../Component/Class/ClassTile/ClassTile";

function LoginPage() {
    const [background, setBackground] = useState('#D6D6D6');
    return (
        <div style={{backgroundColor:background}}  className="background-log">
            <Login setBackground = {setBackground}/>
        </div>
    )
}

export default LoginPage
