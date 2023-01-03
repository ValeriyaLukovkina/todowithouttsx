import { applyMiddleware } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux"; 
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import calendarReducer from "./calendar-reducer";
import categoryReducer from "./category-reducer";
import sortReducer from "./sort-reducer";
import toDoReducer from "./todo-reducer";

const reducers = combineReducers({
    toDo: toDoReducer,
    calendar: calendarReducer,
    auth: authReducer,
    app: appReducer,
    categories: categoryReducer,
    sort: sortReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

window.store = store;