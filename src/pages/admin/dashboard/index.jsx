import React from "react";
import ComingSoon from "../../../components/imageComponents/ComingSoon";
import LogOut from "../../../components/buttons/LogOut";
import {useNavigate} from "react-router-dom";


function Index() {
    const navigate = useNavigate();

    const editMyProfile = (e) => {
        navigate('/my-profile');
    }

    return (
        <div className="dashboard">
            <div>
                <ComingSoon/>
                <div>
                    <h2>Coming Soon</h2>
                    <div className="loginButton">
                        <button onClick={() => editMyProfile()}>edit my profile and my worklog</button>
                    </div>
                    <LogOut logout="logout"/>
                </div>
            </div>
        </div>
    );
}

export default Index;