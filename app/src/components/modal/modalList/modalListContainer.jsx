import React from "react";
import { connect } from "react-redux";
import { changeTaskCategory } from "../../../redux/todo-reducer";
import modalList from "./ModalList";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        categories: state.categories.categories,
        isOpen: ownProps.isOpen,
        taskCategory: ownProps.taskCategory,
        setTemporaryTaskCategory: ownProps.setTemporaryTaskCategory,
        onClose: ownProps.onClose,
        taskId: ownProps.taskId
    }
}

const ModalListContainer = connect(mapStateToProps, { changeTaskCategory })(modalList);

export default ModalListContainer;