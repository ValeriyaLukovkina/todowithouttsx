import { subtasksAPI, tasksAPI } from '../api/api';
import { helperAddSubtask, helperChangeSubtask, helperDeleteSubtask, updateAllSubtasks, updateObjectInArray, updateObjectInArrayWithExtra } from '../utils/object-helpers';
import { deleteCategory } from './category-reducer';

const SET_ALL_TASKS = 'SET_ALL_TASKS';
const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
const CHANGE_TASK_NAME_SUCCESS = 'CHANGE_TASK_NAME_SUCCESS';
const CHANGE_TASK_CATEGORY_SUCCESS = 'CHANGE_TASK_CATEGORY_SUCCESS';
const CHANGE_ALL_TASK_CATEGORY_SUCCESS = 'CHANGE_ALL_TASK_CATEGORY_SUCCESS';
const IS_TASK_COMPLETE_SUCCESS = 'IS_TASK_COMPLETE_SUCCESS';
const SET_TASK_DATE_SUCCESS = 'SET_TASK_DATE_SUCCESS';
const SET_TASK_TIME_SUCCESS = 'SET_TASK_TIME_SUCCESS';
const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
const DELETE_TASK_CURRENT_CATEGORY_SUCCESS = 'DELETE_TASK_CURRENT_CATEGORY_SUCCESS';
const ADD_SUBTASK_SUCCESS = 'ADD_SUBTASK_SUCCESS';
const ADD_SUBTASK_PREVIOUS = 'ADD_SUBTASK_PREVIOUS';
const CHANGE_SUBTASK_PREVIOUS = 'CHANGE_SUBTASK_PREVIOUS';
const DELETE_SUBTASK_PREVIOUS = 'DELETE_SUBTASK_PREVIOUS';
const IS_SUBTASK_COMPLETE_SUCCESS = 'IS_SUBTASK_COMPLETE_SUCCESS';
const IS_ALL_SUBTASK_COMPLETE_SUCCESS = 'IS_ALL_SUBTASK_COMPLETE_SUCCESS';
const CHANGE_SUBTASK_NAME_SUCCESS = 'CHANGE_SUBTASK_NAME_SUCCESS';

const DELETE_SUBTASK = 'DELETE_SUBTASK';


const initialState = {
    tasks: [],
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, {
                    ...action.task
                }]
            }
        case CHANGE_TASK_NAME_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, '_id', { nameTask: action.nameTask })
            }
        case CHANGE_TASK_CATEGORY_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, '_id', { category: action.category })
            }
            case CHANGE_ALL_TASK_CATEGORY_SUCCESS:
                debugger
                return {
                    ...state,
                    tasks: updateObjectInArray(state.tasks, action.previousCategory, 'category', { category: action.category })
                }
        case IS_TASK_COMPLETE_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, '_id', { complete: action.boolean })
            }
        case SET_TASK_DATE_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, '_id', { date: action.date })
            }
        case SET_TASK_TIME_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArray(state.tasks, action.taskId, '_id', { time: action.time })
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem._id !== action.taskId)
            }
        case DELETE_TASK_CURRENT_CATEGORY_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem.category !== action.category)
            }
        case ADD_SUBTASK_PREVIOUS:
            return {
                ...state,
                tasks: helperAddSubtask(state.tasks, action.taskId, '_id', action.subtask)
            }
        case CHANGE_SUBTASK_PREVIOUS:
            return {
                ...state,
                tasks: updateObjectInArrayWithExtra(state.tasks, action.taskId, 1, '_id', { nameSubtask: action.nameSubtask }, 'subtask')
            }
        case DELETE_SUBTASK_PREVIOUS:
            return {
                ...state,
                tasks: helperDeleteSubtask(state.tasks, action.taskId, 1, '_id',)
            }
        case ADD_SUBTASK_SUCCESS:
            return {
                ...state,
                tasks: helperChangeSubtask(state.tasks, action.taskId, '_id', action.subtask)
            }
        case IS_SUBTASK_COMPLETE_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArrayWithExtra(state.tasks, action.taskId, action.subtaskId, '_id', { complete: action.boolean }, 'subtask',)
            }
        case CHANGE_SUBTASK_NAME_SUCCESS:
            return {
                ...state,
                tasks: updateObjectInArrayWithExtra(state.tasks, action.taskId, action.subtaskId, '_id', { nameSubtask: action.nameSubtask }, 'subtask')
            }
        case IS_ALL_SUBTASK_COMPLETE_SUCCESS:
            return {
                ...state,
                tasks: updateAllSubtasks(state.tasks, action.taskId, '_id', { complete: action.boolean }, 'subtask')
            }
        case DELETE_SUBTASK:
            return {
                ...state,
                tasks: helperDeleteSubtask(state.tasks, action.taskId, action.subtaskId, 'id',),
            }
        default:
            return state
    }
}

export const setTask = (tasks) => ({ type: SET_ALL_TASKS, tasks });
export const addTaskSuccess = (task) => ({ type: ADD_TASK_SUCCESS, task });
export const changeTaskNameSuccess = (taskId, nameTask) => ({ type: CHANGE_TASK_NAME_SUCCESS, taskId, nameTask });
export const changeTaskCategorySuccess = (taskId, category) => ({ type: CHANGE_TASK_CATEGORY_SUCCESS, taskId, category });
export const changeAllTaskCategorySuccess = (previousCategory, category) => ({ type: CHANGE_ALL_TASK_CATEGORY_SUCCESS, previousCategory, category });
export const isTaskCompleteSuccess = (taskId, boolean) => ({ type: IS_TASK_COMPLETE_SUCCESS, taskId, boolean });
export const setTaskDateSuccess = (taskId, date) => ({ type: SET_TASK_DATE_SUCCESS, taskId, date });
export const setTaskTimeSuccess = (taskId, time) => ({ type: SET_TASK_TIME_SUCCESS, taskId, time });
export const deleteTaskSuccess = (taskId) => ({ type: DELETE_TASK_SUCCESS, taskId });
export const deleteTaskCurrentCategorySuccess = (category) => ({ type: DELETE_TASK_CURRENT_CATEGORY_SUCCESS, category });
export const addSubtaskPrevious = (taskId, nameSubtask) => ({ type: ADD_SUBTASK_PREVIOUS, taskId, subtask: { _id: 1, nameSubtask, complete: false } });
export const deleteSubtaskPrevious = (taskId) => ({ type: DELETE_SUBTASK_PREVIOUS, taskId });
export const isSubtaskCompleteSuccess = (taskId, subtaskId, boolean) => ({ type: IS_SUBTASK_COMPLETE_SUCCESS, taskId, subtaskId, boolean });
export const isAllSubtaskCompleteSuccess = (taskId, boolean) => ({ type: IS_ALL_SUBTASK_COMPLETE_SUCCESS, taskId, boolean });
export const changeSubtaskPrevious = (taskId, nameSubtask) => ({ type: CHANGE_SUBTASK_PREVIOUS, taskId, nameSubtask });
export const addSubtaskSuccess = (taskId, subtask) => ({ type: ADD_SUBTASK_SUCCESS, taskId, subtask });
export const changeSubtaskNameSuccess = (taskId, subtaskId, nameSubtask) => ({ type: CHANGE_SUBTASK_NAME_SUCCESS, taskId, subtaskId, nameSubtask });
export const deleteSubtask = (taskId, subtaskId) => ({ type: DELETE_SUBTASK, taskId, subtaskId });

export const getAllTasks = (userId) => async (dispatch) => {
    let response = await tasksAPI.getAllTasks(userId);
    if (response.resultCode === 0) {
        dispatch(setTask(response.tasks))
    } else {
        console.log('not load')
    }
}

export const addTask = (userId, nameTask, date, time, category) => async (dispatch) => {
    let response = await tasksAPI.addTask(userId, nameTask, date, time, category)
    if (response.resultCode === 0) {
        dispatch(addTaskSuccess(response.task))
    }
}

export const changeTaskName = (taskId, nameTask) => async (dispatch) => {
    let response = await tasksAPI.changeTaskName(taskId, nameTask);
    if (response.resultCode === 0) {
        dispatch(changeTaskNameSuccess(taskId, nameTask))
    }
}

export const changeTaskCategory = (taskId, category) => async (dispatch) => {
    let response = await tasksAPI.changeTaskCategory(taskId, category);
    if (response.resultCode === 0) {
        dispatch(changeTaskCategorySuccess(taskId, category))
    }
}

export const changeAllTaskCategory = (userId, previousCategory, categoryId) => async (dispatch) => {
    debugger
    let response = await tasksAPI.changeAllTaskCategory(userId, previousCategory, null);
    if (response.resultCode === 0) {
        debugger
        dispatch(changeAllTaskCategorySuccess(previousCategory, null))
        dispatch(deleteCategory(userId, categoryId))
    }
}

export const isTaskComplete = (taskId, boolean) => async (dispatch) => {
    let response = await tasksAPI.isTaskComplete(taskId, boolean);
    if (response.resultCode === 0) {
        dispatch(isTaskCompleteSuccess(taskId, boolean))
    }
}

export const setTaskDate = (taskId, date) => async (dispatch) => {
    let response = await tasksAPI.setTaskDate(taskId, date);
    if (response.resultCode === 0) {
        dispatch(setTaskDateSuccess(taskId, date))
    }
}

export const deleteTask = (taskId) => async (dispatch) => {
    let response = await tasksAPI.deleteTask(taskId)
    if (response.resultCode === 0) {
        dispatch(deleteTaskSuccess(taskId))
    }
}

export const deleteTaskCurrentCategory = (userId, category, categoryId) => async (dispatch) => {
    debugger
    let response = await tasksAPI.deleteTaskCurrentCategory(userId, category)
    debugger
    if (response.resultCode === 0) {
        dispatch(deleteTaskCurrentCategorySuccess(category))
        dispatch(deleteCategory(userId, categoryId))
    }
}

export const setTaskTime = (taskId, time) => async (dispatch) => {
    let response = await tasksAPI.setTaskTime(taskId, time);
    if (response.resultCode === 0) {
        dispatch(setTaskTimeSuccess(taskId, time))
    }
}

export const addSubtask = (taskId, nameSubtask) => async (dispatch) => {
    let response = await subtasksAPI.addSubtask(taskId, nameSubtask);
    if (response.resultCode === 0) {
        dispatch(addSubtaskSuccess(taskId, response.subtask))
    }
}

export const isSubtaskComplete = (taskId, subtaskId, boolean) => async (dispatch) => {
    let response = await subtasksAPI.isSubtaskComplete(taskId, subtaskId, boolean);
    if (response.resultCode === 0) {
        dispatch(isSubtaskCompleteSuccess(taskId, subtaskId, boolean))
    } else {
        console.log(response.message)
        dispatch(isSubtaskCompleteSuccess(taskId, subtaskId, !boolean))
    }
}

export const isAllSubtaskComplete = (taskId, boolean) => async (dispatch) => {
    let response = await subtasksAPI.isAllSubtaskComplete(taskId, boolean);
    if (response.resultCode === 0) {
        dispatch(isAllSubtaskCompleteSuccess(taskId, boolean))
    }
}

export const changeSubtaskName = (taskId, subtaskId, nameSubtask) => async (dispatch) => {
    let response = await subtasksAPI.changeSubtaskName(taskId, subtaskId, nameSubtask);
    if (response.resultCode === 0) {
        dispatch(changeSubtaskNameSuccess(taskId, subtaskId, nameSubtask))
    }
}

export default toDoReducer;