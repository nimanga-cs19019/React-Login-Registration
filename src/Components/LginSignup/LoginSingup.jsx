import React from "react"
import "./LoginSignup.css"
import user_icon from "../Assets/icons8-person-24.png"
import email_icon from "../Assets/icons8-email-30.png"
import password_icon from "../Assets/icons8-password-26.png"
const LoginSignup = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=""></img>
                <input type="text"></input>
            </div>

            <div className="input">
                <img src={email_icon} alt=""></img>
                <input type="email"></input>
            </div>

            <div className="input">
                <img src={password_icon} alt=""></img>
                <input type="password"></input>
            </div>
            <div className="forgot">Forgot password<span>  Click here </span></div>
            <div className="sumbit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
            </div>
        </div>
    )
}

export default LoginSignup