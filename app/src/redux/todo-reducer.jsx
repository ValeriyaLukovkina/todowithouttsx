// import { tasksAPI } from '../api/api';
import { tasksAPI } from '../api/api';
// import data from '../data.json';
import dataCategories from '../dataCategories.json'
import { helperAddSubtask, helperDeleteSubtask, updateAllSubtasks, updateObjectInArray, updateObjectInArrayWithExtra } from '../utils/object-helpers';

const SET_ALL_TASKS = 'SET_ALL_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const DELETE_SUBTASK = 'DELETE_SUBTASK';
const IS_TASK_COMPLETE = 'IS_TASK_COMPLETE';
const IS_SUBTASK_COMPLETE = 'IS_SUBTASK_COMPLETE';
const CHANGE_ALL_SUBTASK = 'CHANGE_ALL_SUBTASK';
const CHANGE_TASK_CATEGORY = 'CHANGE_TASK_CATEGORY';
const CHOICE_DATE = 'CHOICE_DATE';
const CHOICE_TIME = 'CHOICE_TIME';

const CHANGE_TASK = 'CHANGE_TASK';
const CHANGE_SUBTASK = 'CHANGE_SUBTASK';
const ADD_TASK = 'ADD_TASK';
const ADD_SUBTASK = 'ADD_SUBTASK';


const initialState = {
    tasks: [],
    categories: dataCategories,
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem.id !== action.id)
            }
            case DELETE_SUBTASK:
                return {
                    ...state,
                    tasks: helperDeleteSubtask(state.tasks, action.taskId, action.subtaskId, 'id',),
                    // state.tasks.filter(elem => elem.id !== action.id)
                }
        case IS_TASK_COMPLETE:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', {complete: action.boolean})
            }
        case IS_SUBTASK_COMPLETE:
            return {
                ...state,
                tasks: updateObjectInArrayWithExtra(state.tasks, action.taskId, action.subtaskId, 'id', {complete: action.boolean}, 'subtask')
            }
            case CHANGE_ALL_SUBTASK:
                return {
                    ...state,
                    tasks: updateAllSubtasks(state.tasks, action.taskId, 'id', {complete: action.boolean}, 'subtask')
                }
        case CHANGE_TASK_CATEGORY:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', {category: action.category})
            }
            case CHANGE_TASK:
                debugger
                return {
                    ...state,
                    tasks: updateObjectInArray(state.tasks, action.taskId, 'id', {task: action.nameTask})
                }
        case CHANGE_SUBTASK:
            return {
                ...state,
                tasks: updateObjectInArrayWithExtra(state.tasks, action.taskId, action.subtaskId, 'id', {name: action.nameSubtask}, 'subtask')
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: 22,
                    task: action.task,
                    complete: false
                }]
            }
            case ADD_SUBTASK:

                return {
                    ...state,
                    tasks: helperAddSubtask(state.tasks, action.taskId, 'id', action.nameSubtask)
                }
        case CHOICE_DATE:

            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', {date: action.date})
            }
            case CHOICE_TIME:
  
                return {
                    ...state,
                    tasks: updateObjectInArray(state.tasks, action.taskId, 'id', {time: action.time})
                }
        default:
            return state
    }
}

export const setTask = (tasks) => ({type: SET_ALL_TASKS, tasks})
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const deleteSubtask = (taskId, subtaskId) => ({ type: DELETE_SUBTASK, taskId, subtaskId });
export const isTaskComplete = (taskId, boolean) => ({ type: IS_TASK_COMPLETE, taskId, boolean });
export const isSubtaskComplete = (taskId, subtaskId, boolean) => ({ type: IS_SUBTASK_COMPLETE, taskId, subtaskId, boolean });
export const changeAllSubtask = (taskId, boolean) => ({ type: CHANGE_ALL_SUBTASK, taskId, boolean });
// export const isAllSubtaskUncomplete = (taskId, subtaskId, boolean) => ({ type: IS_ALL_SUBTASK_UNCOMPLETE, taskId, subtaskId, boolean });
export const changeTaskCategory = (taskId, category) => ({ type: CHANGE_TASK_CATEGORY, taskId, category });
export const changeTask = (taskId, nameTask) => ({ type: CHANGE_TASK, taskId, nameTask });
export const changeSubtask = (taskId, subtaskId, nameSubtask) => ({ type: CHANGE_SUBTASK, taskId, subtaskId, nameSubtask });
export const addTask = (task) => ({ type: ADD_TASK, task });
export const addSubtask = (taskId, nameSubtask) => ({ type: ADD_SUBTASK, taskId,nameSubtask });
export const choiceDate = (taskId, date) => ({ type: CHOICE_DATE, taskId, date });
export const choiceTime = (taskId, time) => ({ type: CHOICE_TIME, taskId, time });

export const getAllTasks = () => async (dispatch) => {
    debugger
let response = await tasksAPI.getAllTasks();
if (response.resultCode === 0) {
    dispatch(setTask(response.tasks))
} else {
    console.log('not load')
}   
}

export const updateNameTask = (taskId, name) => async (dispatch) => {
    let promise = await tasksAPI.updateNameTask(taskId, name);
    debugger
    if (promise.resultCode === 0) {
        dispatch(changeTask(taskId, name))
        debugger
    }
    debugger
}

// export const getAllTasks = () => async (dispatch) => {
//     let promise = await tasksAPI.getAllTasks();
//     dispatch(setTask(promise))
// }
export default toDoReducer;