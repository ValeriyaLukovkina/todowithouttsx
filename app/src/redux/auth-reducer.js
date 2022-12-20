// import { authAPI } from "../api/api";
// import { stopSubmit } from 'redux-form'

// const SET_USER_DATA = 'SET-USER-DATA';
// const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

// let initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false,
//     isFetching: false,
//     captchaUrl: null,
// }

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.data,
//             }
//         case GET_CAPTCHA_URL_SUCCESS:
//             return {
//                 ...state,
//                 ...action.data,
//             }
//         default:
//             return state;
//     }

// }

// export let setAuthUserData = (userId, email, login, isAuth) => {
//     return {
//         type: SET_USER_DATA,
//         data: { userId, email, login, isAuth },
//     }
// }
// export let getCaptchaUrlSuccess = (captchaUrl) => {
//     return {
//         type: SET_USER_DATA,
//         data: { captchaUrl },
//     }
// }

// export const authMe = () => async (dispatch) => {
//     let response = await authAPI.authMe();
//     if (response.resultCode === 0) {
//         debugger
//         let { id, email, login } = response.data;
//         dispatch(setAuthUserData(id, email, login, true))
//     }
// }

// export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
//     let promise = await authAPI.login(email, password, rememberMe, captcha);
//     if (promise.resultCode === 0) {
//         dispatch(authMe())
//     } else {
//         if (promise.resultCode === 10) {
//             dispatch(getCaptchaUrl())
//         }
        
//         const message = promise.messages.length > 0 ? promise.messages[0] : 'Some error';
//         dispatch(stopSubmit('login', { _error: message }))
//     }
// }

// export const logout = () => async (dispatch) => {
//     let promise = await authAPI.logout()
//     if (promise.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false))
//     }
// }

// export const getCaptchaUrl = () => async (dispatch) => {
//     const promise = await securityAPI.getCaptchaUrl()
//     const captchaUrl = promise.url;
//     dispatch(getCaptchaUrlSuccess(captchaUrl))
// }

// export default authReducer