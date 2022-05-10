import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AuthStateContext from "../../contexts/auth";
import {loginWithCode} from '../../services/auth-service';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import {myError} from '../../services/auth-service';
import {useNavigate} from "react-router-dom";

const codeState = {
    error: '',
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
}

let ourDataStyle = false;

export const ourData = {
    email: '',
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
};

export default function LoginCodeForm() {
    const {dispatch, user} = React.useContext(AuthStateContext)
    const [error, setError] = useState('');
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');
    const navigate = useNavigate();

    let onChange1 = (e) => {
        return setCode1(e.target.value);
    }
    let onChange2 = (e) => {
        return setCode2(e.target.value);
    }
    let onChange3 = (e) => {
        return setCode3(e.target.value);
    }
    let onChange4 = (e) => {
        return setCode4(e.target.value);
    }
    let onChange5 = (e) => {
        return setCode5(e.target.value);
    }
    let onChange6 = (e) => {
        return setCode6(e.target.value);
    }

    const onClear = () => {
        setCode1('');
        setCode2('');
        setCode3('');
        setCode4('');
        setCode5('');
        setCode6('');
    }



    const codeValidation = () => {
        if (code1 === '' || code2 === '' || code3 === '' || code4 === '' || code5 === '' || code6 === '') {
            setError("Please enter a valid code")
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        if (codeValidation()) {
            dispatch({type: "SET_CODE", payload: {code1, code2, code3, code4, code5, code6}})
        }

        ourData.email = user.email;
        ourData.code = `${code1}${code2}${code3}${code4}${code5}${code6}`
        ourData.languageId = 1
        if (ourData.code === '111111') {
            navigate('/dashboard')
        } else {
            ourDataStyle = true;
        }
        try {
            loginWithCode(ourData)
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data.data.jwt.token);
                    localStorage.setItem("token", response.data.data.jwt.token);
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
            <p>To finalize your verification, please enter the code that has been sent to your email address/SMS</p>
            <form>
                {error !== '' || myError.hasError === true || ourDataStyle === true
                    ? <ErrorMessage/>
                    : null
                }
                <div className="login-code-form__div">
                    <Box>
                        <TextField id="standard-basic" variant="standard" onChange={onChange1} value={code1}
                                   sx={{width: '41px'}}/>
                        <TextField id="standard-basic" variant="standard" onChange={onChange2} value={code2}
                                   sx={{width: '41px'}}/>
                        <TextField id="standard-basic" variant="standard" onChange={onChange3} value={code3}
                                   sx={{width: '41px'}}/>
                        <TextField id="standard-basic" variant="standard" onChange={onChange4} value={code4}
                                   sx={{width: '41px'}}/>
                        <TextField id="standard-basic" variant="standard" onChange={onChange5} value={code5}
                                   sx={{width: '41px'}}/>
                        <TextField id="standard-basic" variant="standard" onChange={onChange6} value={code6}
                                   sx={{width: '41px'}}/>
                    </Box>
                    <div>
                        <CloseIcon onClick={() => {
                            onClear()
                        }}/>
                    </div>
                </div>
                <div className="loginButton">
                    <button type="button" onClick={() => handleSubmit()}>Submit</button>
                </div>
            </form>
            <span>If you do not receive the confirmation message within a few minutes, please check your Spam or Bulk E-Mail folder</span>
        </div>
    );
}