import React from "react";
import { connect } from "react-redux";
import { addSubtask, changeAllSubtask, deleteSubtask, deleteTask, isSubtaskComplete, isTaskComplete } from "../../redux/todo-reducer";
import ToDo from "./ToDo";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
        deleteSubtask: (taskId, subtaskId) => {
            dispatch(deleteSubtask(taskId, subtaskId))
        },
        isTaskComplete: (taskId, boolean) => {
            dispatch(isTaskComplete(taskId, boolean))
        },
        changeAllSubtask: (taskId, boolean) => {
            dispatch(changeAllSubtask(taskId, boolean))
        },
        isSubtaskComplete: (taskId, subtaskId, boolean) => {
            dispatch(isSubtaskComplete(taskId, subtaskId, boolean))
        },
        addSubtask: (taskId, nameSubtask) => {
            dispatch(addSubtask(taskId, nameSubtask))
        }
    }
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;