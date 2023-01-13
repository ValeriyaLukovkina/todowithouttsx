import React from "react";
import { connect } from "react-redux";
import { changeAllTaskCategory, deleteTaskCurrentCategory } from "../../../redux/todo-reducer";
import ModalDeleteCategory from "./ModalDeleteCategory";

const mapStateToProps = (state, ownProps) => {
    return {
        onClose: ownProps.onClose,
        userId: ownProps.userId,
        nameCategory: ownProps.nameCategory,
        categoryId: ownProps.categoryId
    }
}

const ModalDeleteCategoryContainer = connect(mapStateToProps, { deleteTaskCurrentCategory, changeAllTaskCategory })(ModalDeleteCategory)

export default ModalDeleteCategoryContainer;