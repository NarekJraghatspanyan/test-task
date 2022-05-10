import React from 'react';
import Logo from '../imageComponents/Logo';
import AuthImage from '../imageComponents/AuthImage';


const LeftSide = () => {
    return (
     <div className="leftSide">
         <div>
             <Logo/>
             <AuthImage/>
         </div>
     </div>
    );
}

export default LeftSide;