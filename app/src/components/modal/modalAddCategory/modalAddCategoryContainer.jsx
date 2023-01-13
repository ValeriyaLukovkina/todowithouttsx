import React from "react";
import { connect } from "react-redux";
import { addCategory } from "../../../redux/category-reducer";
import ModalAddCategory from "./ModalAddCategory";

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.categories,
        onClose: ownProps.onClose
    }
}

const ModalAddCategoryContainer = connect(mapStateToProps, { addCategory })(ModalAddCategory);

export default ModalAddCategoryContainer;