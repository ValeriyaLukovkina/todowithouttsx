import React from "react";
import { connect } from "react-redux";
import { changeTaskCategory } from "../../../redux/todo-reducer";
import modalList from "./modalList";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        categories: state.toDo.categories,
        isOpen: ownProps.isOpen,
        category: ownProps.category,
        onClose: ownProps.onClose,
        taskId: ownProps.taskId
    }
}

const ModalListContainer = connect(mapStateToProps, { changeTaskCategory })(modalList);

export default ModalListContainer;