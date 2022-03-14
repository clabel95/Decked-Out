import React, { useState } from 'react';
import './SignUp.css'
// 'use strict';


import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth'

function SignUp(props){
    const [formState, setFormState] = useState({
        username: '',
        email: '',
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
                                Email:............ .....
                                <input type="text"
                                value= {formState.email}
                                onChange={handleChange}
                                />
                                <br></br>
                                Username:. . . ...
                                <input type="text"
                                 value= {formState.username}
                                 onChange={handleChange}/>
                                <br></br>
                                Password:... . .....
                                <input type="text"
                                value= {formState.password}
                                onChange={handleChange}/>
                            </label>
                            
                        </form>
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