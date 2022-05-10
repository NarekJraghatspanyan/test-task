import React from 'react';
import {logout} from "../../services/auth-service";
import {useNavigate} from "react-router-dom";

const LogOut = (props) => {
    const navigate = useNavigate();

    const logoutSubmit = (e) => {
        navigate('/login')
        try {
            logout()
                .then(() => {
                    console.log('hehe')
                })
                .catch((error) => {
                    if (error.response) {
                        console.log("server responded")
                    } else if (error.request) {
                        console.log("network error");
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="loginLogOut">
            <button onClick={() => logoutSubmit()}>{props.logout}</button>
        </div>
    );
}

export default LogOut;