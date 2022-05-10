import React from 'react';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorMessage = () => {
    return (
        <div className="login-code-validation-error">
            <p><ErrorOutlineIcon/> Please enter a valid code</p>
        </div>
    );
}

export default ErrorMessage;