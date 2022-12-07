import data from '../data.json';
import { updateObjectInArray } from '../utils/object-helpers';

const DELETE_TASK = 'DELETE_TASK';
const IS_COMPLETE = 'IS_COMPLETE';
// const CHANGE_TASK = 'CHANGE_TASK';
const ADD_TASK = 'ADD_TASK';


const initialState = {
    tasks: data,
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem.id !== action.id)
            }
        case IS_COMPLETE:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.id, 'id', {complete: action.boolean})
            }
        // case CHANGE_TASK:
        //     return {
        //     }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: 22,
                    task: action.task,
                    complete: false
                }]
            }
        default:
            return state
    }
}

export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const isComplete = (id, boolean) => ({ type: IS_COMPLETE, id, boolean })
// export const changeTask = (id) => ({ type: CHANGE_TASK, id });
export const addTask = (task) => ({ type: ADD_TASK, task });


export default toDoReducer;