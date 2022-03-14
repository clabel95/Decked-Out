import React from 'react'
import './SignUp.css'
// 'use strict';

function SignUp(props){
    return (props.trigger) ? (
        <div className="signUpPopUp">
            <div className='popup-inner'>
                <h2 id= "signUpHead">Sign Up</h2>
                <button className='submit-btn' onClick={()=> props.setTrigger(false)} >Submit</button>
                { props.children }
            </div>
        </div>
    ) : "";

}
export default SignUp;



// const e = React.createElement;

// class SignUpButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }

//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }

//         return e(
//             'button',
//             { onClick: () => this.setState({ liked: true }) },
//             'Sign Up'
            
//         );
//     }
// } const domContainer = document.querySelector('#signUp');
// ReactDOM.render(e(SignUpButton), domContainer);
// }