import React from "react";
import { connect } from "react-redux";
import { addCategory } from "../../../redux/category-reducer";
import FormAddCategory from "./FormAddCategory";

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.categories,
        userId: state.auth.userId,
        onClose: ownProps.onClose,
    }
}

const FormAddCategoryContainer = connect(mapStateToProps, { addCategory })(FormAddCategory)

export default FormAddCategoryContainer;