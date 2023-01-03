import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeMeanSort } from "../../redux/sort-reducer";
import { addSubtaskPrevious, deleteSubtask, deleteTask, isAllSubtaskComplete, isSubtaskComplete, isTaskComplete } from "../../redux/todo-reducer";
import ToDo from "./ToDo";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        categories: state.categories.categories,
        meanSort: state.sort.sort,
        dateBlock: state.sort.dateBlock,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSubtaskPrevious: (taskId) => {
            dispatch(addSubtaskPrevious(taskId))
        },
        deleteTask: (taskId) => {
            dispatch(deleteTask(taskId))
        },
        deleteSubtask: (taskId, subtaskId) => {
            dispatch(deleteSubtask(taskId, subtaskId))
        },
        isTaskComplete: (taskId, boolean) => {
            dispatch(isTaskComplete(taskId, boolean))
        },
        isAllSubtaskComplete: (taskId, boolean) => {
            dispatch(isAllSubtaskComplete(taskId, boolean))
        },
        isSubtaskComplete: (taskId, subtaskId, boolean) => {
            dispatch(isSubtaskComplete(taskId, subtaskId, boolean))
        },
        changeMeanSort: (meanSort) => {
            dispatch(changeMeanSort(meanSort))
        }
    }
}
const ToDoContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ToDo)

export default ToDoContainer;