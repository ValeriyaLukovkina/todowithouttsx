import { applyMiddleware } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux"; 
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import calendarReducer from "./calendar-reducer";
import toDoReducer from "./todo-reducer";

const reducers = combineReducers({
    toDo: toDoReducer,
    calendar: calendarReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

window.store = store;