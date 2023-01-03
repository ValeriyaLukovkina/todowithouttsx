import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { initializeApp, initializedSuccess } from "./redux/app-reducer";
import { setAuthUserData } from "./redux/auth-reducer";
import { setCategories } from "./redux/category-reducer";
import { getAllTasks } from "./redux/todo-reducer";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
        sort: state.sort.sort
    }
}

const AppContainer = connect(mapStateToProps, { setAuthUserData, initializedSuccess, getAllTasks, setCategories })(App);

export default AppContainer;