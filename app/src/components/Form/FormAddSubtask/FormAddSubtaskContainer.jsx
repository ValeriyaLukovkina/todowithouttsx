import React from "react";
import { connect } from "react-redux";
import { changeSubtask, deleteSubtask } from "../../../redux/todo-reducer";
import FormAddSubtask from "./FormAddSubtask";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        nameSubtask: ownProps.nameSubtask,
        taskId: ownProps.taskId,
        subtaskId: ownProps.subtaskId,
        setEditSubtask: ownProps.setEditSubtask,
        setAddingSubtask: ownProps.setAddingSubtask,
        adding: ownProps.adding
    }
}

const FormAddSubtaskContainer = connect(mapStateToProps, { changeSubtask, deleteSubtask})(FormAddSubtask)

export default FormAddSubtaskContainer;
