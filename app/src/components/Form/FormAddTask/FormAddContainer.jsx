import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../../redux/todo-reducer";
import FormAddTaks from "./FormAddTaks";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        userId: state.auth.userId,
    }
}

const FormAddTaskContainer = connect(mapStateToProps, { addTask })(FormAddTaks)

export default FormAddTaskContainer;