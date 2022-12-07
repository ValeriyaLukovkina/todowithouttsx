import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../../redux/todo-reducer";
import FormAdd from "./FormAdd";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
    }
}

const FormAddContainer = connect(mapStateToProps, { addTask })(FormAdd)

export default FormAddContainer;