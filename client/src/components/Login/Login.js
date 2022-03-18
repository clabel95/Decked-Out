import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import xicon from '../Assets/xicon.png'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth'

function Login(props) {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    // let navigate = useNavigate()
    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } = await loginUser({
                variables: { ...formState },
            });
            //change Auth.login for the SignUp .js??
            console.log(data);
            Auth.login(data.login.token);
            // navigate('/home')
        } catch (err) {
            console.log(err);
        }
        //clear form values after submit button
        setFormState({
            username: '',
            password: '',
        });
    };
    return (props.trigger) ? (
        <div className="loginPopup">
            <div className='loginPopup-inner'>
                <h2 id="loginHead">Login</h2>
                 <button id='xbut' type="button" 
                    onClick={() => props.trigger=props.setTrigger(false)}>
                <img src={xicon}></img>
                </button>
                <form onSubmit={handleFormSubmit} >
                    <label id="formLogin">
                        Username:
                        <input
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            type="text"
                            // ref={this.textInput}
                        />
                        <br></br>
                        Password:
                        <input
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            type="password"
                        />
                        <br></br>
                        {/* <Link to='/home'> */}
                            <button 
                                type='submit' 
                                className='login-btn'  >Enter</button>
                        {/* </Link> */}
                        {/* { props.children } */}
                    </label>
                    {/* <button type='submit' className='login-btn'  >Enter</button> */}
                    {/* { props.children } */}
                </form>

            </div>
        </div>

    ) : "";


}
export default Login;

// onClick={() => props.setTrigger(false)}
