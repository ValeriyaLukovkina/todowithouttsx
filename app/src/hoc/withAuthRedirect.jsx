// import React from "react";
// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";

// const mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

// export const WithAuthRedirerct = (Component) => {
//     const RedirectComponent = (props) => {
//         if (!props.isAuth) {
//             return <Navigate to='/signin'/>
//         }
//         return <Component {...props}/>
//     }

//     const ConnectAuthRedirerct = connect(mapStateToPropsForRedirect)(RedirectComponent);

//     return ConnectAuthRedirerct;
// }