import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../contexts/AuthContext";

import { register as authRegister, login as authLogin} from '../../services/authService';

export default function Register() {
    const { login, changeMessage } = useAuth();

    const navigate = useNavigate();

    const onRegisterHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('email');
        let password = formData.get('password');

        await authRegister(username, password)
            .then((message) => {
                changeMessage(message);

                authLogin(username, password)
                    .then((authData) => {
                        login(authData);
                    })
            })
            .catch(err => {
                changeMessage(err);
            })

        navigate('/');
    }

    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={onRegisterHandler}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <input className="button-submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
    );
}