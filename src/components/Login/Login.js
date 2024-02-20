import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import * as authService from '../../services/authService';

const Login = () => {
    const { login, changeMessage } = useAuth();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        // const proceed = window.confirm("Are you sure?");
        
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('email');
        let password = formData.get('password');

        //const data = Object.fromEntries(formData.entries());
        //const specificData = formData.getAll('SameNameInputs');
        
        authService.login(username, password)
            .then((authData) => {
                login(authData);
            })
            .catch(err => {
                changeMessage(err);
            })

        navigate('/', { replace: true });
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     let formData = new FormData(e.currentTarget);

    //     let username = formData.get('username');
    //     let password = formData.get('password');
    //     let age = formData.get('18+');

    //     console.log(username);
    //     console.log(password);
    //     console.log(age);
    // }

    // const onChange = (e) => {
    //     e.preventDefault();

    //     console.log(e.target.value);
    // }

    return (
        <section id="login-page" className="login">
            <form id="login-form" method="POST" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="email" name="email" id="email" placeholder="Email" required/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" required/>
                        </span>
                    </p>
                    <input className="button-submit" type="submit" value="Login"/>
                </fieldset>
                {/* <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="email" onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" defaultValue={"********"} />
                </div>
                <div>
                    <label htmlFor="warrior">Warrior</label>
                    <select name="warrior" id="warrior" >
                        <option value="1">Barbarian</option>
                        <option value="2">Mercenary</option>
                        <option value="3">Gladiator</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="18+">18+</label>
                    <input type="checkbox" name="18+" id="18+" defaultChecked />
                </div>
                <input type="submit" value="Login" /> */}
            </form>
        </section>
    );
}

export default Login;




// function loginFormWithState() {
//     import { useState } from "react";

// export default function NewLogin () {
//     const [ enteredValues, setEnteredValues] = useState({
//         email: '',
//         password: ''
//     });

//     const [ didEdit, setDidEdit] = useState({
//         email: false,
//         password: false
//     });

//     const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    
//     function handleSubmit(event) {
//         event.preventDefault();

//         console.log(enteredValues);
//     }

//     function handleInputChange(identifier, value) {
//         setEnteredValues(prevValues => ({
//             ...prevValues,
//             [identifier]: value
//         }));
//         setDidEdit(prevEdit => ({
//             ...prevEdit,
//             [identifier]: false
//         }));
//     }

//     function handleInputBlur(identifier) {
//         setDidEdit(prevValues => ({
//             ...prevValues,
//             [identifier]: true
//         }));
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>

//             <div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input 
//                         id="email" 
//                         type="email" 
//                         name="email" 
//                         onBlur={() => handleInputBlur('email')}
//                         onChange={(event) => handleInputChange("email", event.target.value)} 
//                         value={enteredValues.email}
//                     />
//                     <div>{emailIsInvalid && <p>Please enter a valid email valid!</p>}</div>
//                 </div>

//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input 
//                         id="password" 
//                         type="password" 
//                         name="password" 
//                         onChange={(event) => handleInputChange("password", event.target.value)} 
//                         value={enteredValues.password}/>
//                 </div>
//             </div>

//             <p>
//                 <button type="reset">Reset</button>
//                 <button >Login</button>
//             </p>
//         </form>
//     );
// }
// }




// function loginFormWithRef() {
//     import { useState, useRef } from 'react';

// export default function StartNewGame() {
//     const [ usernameIsInvalid, setUsernameIsInvalid] = useState(false);

//     const username = useRef();

//     function handleSubmit(event) {
//         event.preventDefault();

//         const enteredUsername = username.current.value;
        
//         const usernameIsValid = enteredUsername.includes('@');

//         if (!usernameIsValid) {
//             setUsernameIsInvalid(true);
//             return;
//         }

//         setUsernameIsInvalid(false);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input className="username" type="text" name="username" ref={username}/>
//                     <div>{usernameIsInvalid && <p>Please enter a valid Username</p>}</div>
//                 </div>
//                 <div>
                    
//                 </div>
//             </div>
//             <button >Use this name</button>
//         </form>
//     );
// }
// }