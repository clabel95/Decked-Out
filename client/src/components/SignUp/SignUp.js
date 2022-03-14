import React, { useState } from 'react';
import './SignUp.css'
// 'use strict';


import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth'

function SignUp(props){
    const [formState, setFormState] = useState({
        email: '',
        username: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${formState}`)
        // console.log(value);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
        }
    }
    return (props.trigger) ? (
        <div className="signUpPopUp">
            <div className='popup-inner'>
                <h2 id= "signUpHead">Sign Up</h2>
                <form onSubmit={handleFormSubmit} >
                            <label id="formSignUp">
                                Email:........... .....
                                <input
                                value= {formState.email}
                                name= "email"
                                onChange={handleChange}
                                type="text"
                                />
                                <br></br>
                                Username:. . . ...
                                <input 
                                 value= {formState.username}
                                 name= "username"
                                 onChange={handleChange}
                                 type="text"
                                />
                                <br></br>
                                Password:... . .....
                                <input 
                                value= {formState.password}
                                name= "password"
                                onChange={handleChange}
                                type="text"
                                />
                            </label>
                            <button className='submit-btn' onClick={()=> props.setTrigger(false)} >Submit</button>
                            {/* { props.children } */}
                        </form>
                
            </div>
        </div>
        // console.log({formState})
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