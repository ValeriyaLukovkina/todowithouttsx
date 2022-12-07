import { combineReducers, legacy_createStore as createStore } from "redux"; 
import calendarReducer from "./calendar-reducer";
import toDoReducer from "./todo-reducer";
// import thunk from "redux-thunk";

const reducers = combineReducers({
    toDo: toDoReducer,
    calendar: calendarReducer,
})

const store = createStore(reducers)

export default store;