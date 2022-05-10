import React from 'react';
import authImage from '../../assets/auth-image.svg'

const AuthImage = () => {
    return (
        <div className="auth-image">
            <img src={authImage} />
        </div>
    );
}

export default AuthImage;