import React from 'react';

const Buttons = (props) => {
    return (
        <div className="loginButton">
          <button>{props.buttonName}</button>
        </div>
    );
}

export default Buttons;