import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import AuthStateContext from "../../contexts/auth";
import {useNavigate} from "react-router-dom";
import {loginGeneratePassword, loginWithCode} from "../../services/auth-service";

const emailState = {
    email: '',
    error: ''
}

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const {dispatch, user} = React.useContext(AuthStateContext)
    const navigate = useNavigate();

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) {
            setError("Email is not valid")
            return false;
        }
        return true;
    }

    const onSubmit = () => {
        if (emailValidation()) {
            dispatch({type: "SET_EMAIL", payload: {email}})
            navigate('/login-code')
        }

        emailState.email = user.email;
        emailState.languageId = 1;
        try {
            loginGeneratePassword(emailState)
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log("server responded")
                        throw new Error('server responded');
                    } else if (error.request) {
                        console.log("network error");
                        throw new Error('network error');
                    }
                });
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h3>Login</h3>
            <form>
                <TextField id="standard-basic" label="Enter your email" variant="standard" value={email}
                           onChange={onChange}/>
                <p className="error-validate-text">{error}</p>
                <div className="loginButton">
                    <button type="button" onClick={() => onSubmit()}>Send Code</button>
                </div>
            </form>
        </div>
    );
}
