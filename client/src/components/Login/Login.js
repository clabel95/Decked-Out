import React, { useState } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth'

function Login(props) {
    const [formState, setFormState] = useState({
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
        console.log(`this is the state of the form ${formState.username}`)

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            //change Auth.login for the SignUp .js??
            Auth.login(data.login.token);
        } catch (err) {
            console.log(err);
        }
    }
    return (props.trigger) ? (
        <div className="loginPopup">
            <div className='loginPopup-inner'>
                <h2 id="loginHead">Login</h2>
                <form onSubmit={handleFormSubmit} >
                    <label id="formLogin">
                        Username:
                        <input
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            type="text"
                        />
                        <br></br>
                        Password:
                        <input
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            type="password"
                        />
                    </label>
                    <button className='login-btn' onClick={() => props.setTrigger(false)} >Enter</button>
                    {/* { props.children } */}
                </form>

            </div>
        </div>

    ) : "";


}
export default Login;