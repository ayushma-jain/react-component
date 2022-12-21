import React, { useState } from "react";
import LoginModal from "../LoginModal.js";
import SignUpModal from "../SignUpModal.js";
function Header(){
    const [LoginModalStatus,setLoginModalStatus] = useState(false);
    const [SignupModalStatus,setSignupModalStatus] = useState(false);
    const handleLoginOpen = (event) => {
        setLoginModalStatus(true);
    }
    const handleLoginClose = (event) => {
        setLoginModalStatus(false);
    }
    const handleSignupOpen = (event) => {
        setSignupModalStatus(true);
    }
    const handleSignupClose = (event) => {
        setSignupModalStatus(false);
    }
    return(
        <>
        <nav className="p-2 navbar navbar-dark bg-dark">
            <div className="col-4">
                <img className="logoImg" src="images/logo.jpg" />
            </div>
            <div className="col-8 align-r">
                <button className="btn btn-success" id="loginBtn" onClick={handleLoginOpen}>Login</button>
                <button className="btn btn-success" id="signUpBtn" onClick={handleSignupOpen}>Signup</button>
            </div>
        </nav>
        <LoginModal modalStatus={LoginModalStatus} handleClose={handleLoginClose}/>
        <SignUpModal modalStatus={SignupModalStatus} handleClose={handleSignupClose}/>
        </>
    )
}
export default Header;