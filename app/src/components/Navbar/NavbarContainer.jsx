import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { deleteCategory } from "../../redux/category-reducer";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        categories: state.categories.categories,
        userId: state.auth.userId,
        firstName: state.auth.firstName
    }
}

const NavbarContainer = connect(mapStateToProps, { logout, deleteCategory })(Navbar)

export default NavbarContainer;