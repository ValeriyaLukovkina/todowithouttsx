import React from "react";
import * as ReactDOM from 'react-dom';

import style from "../login.module.scss"
import SignInFormContainer from "./SignInFormContainer";


const SignIn = ({ }) => {
    return ReactDOM.createPortal(
        <div className={style.login}>
            <SignInFormContainer />
        </div>,
        document.body
    )
}

export default SignIn