import React from "react";
import * as ReactDOM from 'react-dom';
import style from "../login.module.scss"
import SignUpFormContainer from "./SignUpFormContainer";


const SignUp = ({ }) => {
    return ReactDOM.createPortal(
        <div className={style.login}>
            <SignUpFormContainer />
        </div>,
        document.body
    )
}

export default SignUp