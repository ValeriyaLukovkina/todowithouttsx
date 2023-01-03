import { authAPI } from "../api/api";
import { useAuth } from "../hooks/auth.hook";
import { initializedSuccess } from "./app-reducer";
import { setCategories } from "./category-reducer";
import { getAllTasks } from "./todo-reducer";

const SET_USER_TASKS = 'SET_USER_TASKS';

let initialState = {
    userId: null,
    firstName: null,
    lastName: null,
    token: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TASKS:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }

}

export let setAuthUserData = (userId, firstName, lastName, token, isAuth, initialized) => {
    return {
        type: SET_USER_TASKS,
        data: { userId, firstName, lastName, token, isAuth, initialized },
    }
}

export const login = (email, password, setStatus ) => async (dispatch) => {
    let promise = await authAPI.login(email, password);

    if (promise.resultCode === 0) {
        const {token, userId, userFirstName, userLastName, categories } = promise;
        dispatch(setAuthUserData(userId, userFirstName,userLastName, token, true, true))

        dispatch(setCategories(categories))
        dispatch(getAllTasks(userId))
        dispatch(initializedSuccess());
        localStorage.setItem('userData', JSON.stringify({
            userId,
            userFirstName, 
            userLastName,
            token,
        }))
        localStorage.setItem('userCategories', JSON.stringify({
            categories: [...categories]
        }))
    } else {
        const message = promise.messages.length > 0 ? promise.messages[0] : 'Some error';
        setStatus({ error: message })
    }
}

export const logout = () => async (dispatch) => {
    dispatch(setAuthUserData(null, null, null, null, false))
    dispatch(initializedSuccess())
    localStorage.removeItem('userData')
    localStorage.removeItem('userCategories')
}

export const registration = (firstName, lastName, email, password, setStatus ) => async (dispatch) => {
    let promise = await authAPI.registration(firstName, lastName, email, password);
    if (promise.resultCode === 0) {
        dispatch(login(email, password, setStatus))
    } else {
        const message = promise.message.length > 0 ? promise.message[0] : 'Some error';
        setStatus({ error: message })
    }
}

export default authReducer