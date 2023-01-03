import React from "react";
import { connect } from "react-redux";
import { addSubtask, changeSubtaskPrevious, changeSubtaskName, deleteSubtaskPrevious } from "../../../redux/todo-reducer";
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

const FormAddSubtaskContainer = connect(mapStateToProps, { changeSubtaskName, deleteSubtaskPrevious, addSubtask, changeSubtaskPrevious })(FormAddSubtask)

export default FormAddSubtaskContainer;
