import React from "react";
import { connect } from "react-redux";
import { deleteTask, isComplete } from "../../redux/todo-reducer";
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
        isComplete: (id, boolean) => {
            dispatch(isComplete(id, boolean))
        }
    }
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ToDoContainer;