import React from 'react';
// import { Link } from 'react-router-dom'
import highlighterLogin from '../Assets/highlighterLogin.png';
import highlighterSignUp from '../Assets/highlighterSignUp.png';

import SignUp from '../SignUp/SignUp';
import { useState } from 'react';
import "./landing.css";

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
// }

function Landing() {
    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // });
    // // const [addUser, { error, data }] = useMutation(ADD_USER);

    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(`this is the state of the form ${formState}`)

    //     try {
    //         const { data } = await addUser({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addUser.token);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    const [buttonPopup, setButtonPopup] = useState(false)
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
                    <div id="signUp" onClick={() => setButtonPopup(true)}> Sign Up </div>
                     <SignUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
                        {/* <form >
                            <label id="formSignUp">
                                Email:............ .....
                                <input type="text"/>
                                <br></br>
                                Username:. . . ...
                                <input type="text"/>
                                <br></br>
                                Password:... . .....
                                <input type="text"/>
                            </label>
                            
                        </form> */}
                    {/* </SignUp>  */}
                    
                </div> 
            </div>
        </div>
    );
}

export default Landing;