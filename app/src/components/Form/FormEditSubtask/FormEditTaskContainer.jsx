import React from "react";
import { connect } from "react-redux";
import { changeTask, updateNameTask } from "../../../redux/todo-reducer";
import FormEditTask from "./FormEditTask";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        nameTask: ownProps.nameTask,
        taskId: ownProps.taskId,
        setEditTask: ownProps.setEditTask,
    }
}

const FormEditTaskContainer = connect(mapStateToProps, { updateNameTask })(FormEditTask)

export default FormEditTaskContainer;
