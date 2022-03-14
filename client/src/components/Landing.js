import React from 'react';
import highlighterLogin from '../Assets/highlighterLogin.png';
import highlighterSignUp from '../Assets/highlighterSignUp.png';
// import SignUp from '../SignUp.js';
import "../landing.css";



function Landing() {
    // const header =""
    return (
        <div>
        <div id="mainBackground">

            <h1 id="header"> Decked-Out</h1>

            <div id="highlightLogin">
                <img id="highlit" src={highlighterLogin} />
                <div id="login"> Login </div>
            </div>

            <div id="highlightSignUp">
                <img id="highlit" src={highlighterSignUp} />
                <div id="signUp"> Sign Up </div>
                
            </div> 
            </div>
        </div>
    );
}

export default Landing;