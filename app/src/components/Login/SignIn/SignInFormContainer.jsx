import React from "react";
import { connect } from "react-redux";
import { login } from "../../../redux/auth-reducer";
import SignInForm from "./SignInForm";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const SignInFormContainer = connect(mapStateToProps, { login })(SignInForm)

export default SignInFormContainer;