import React from "react";
import { connect } from "react-redux";
import { registration } from "../../../redux/auth-reducer";
import SignUpForm from "./SignUpForm";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const SignUpFormContainer = connect(mapStateToProps, { registration })(SignUpForm)

export default SignUpFormContainer;