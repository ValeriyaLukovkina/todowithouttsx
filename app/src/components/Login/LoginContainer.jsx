import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        // isAuth: state.auth.isAuth,
    }
}

const LoginContainer = connect(mapStateToProps, {})(Login)

export default LoginContainer;