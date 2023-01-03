import React from "react";
import { connect } from "react-redux";
import { changeMeanSort } from "../../../redux/sort-reducer";
import { addSubtaskPrevious, deleteSubtask, deleteTask, isAllSubtaskComplete, isSubtaskComplete, isTaskComplete } from "../../../redux/todo-reducer";
import ToDoCategory from "./ToDoCategory";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        dateBlock: state.sort.dateBlock,
    }
}

const ToDoCategoryContainer = connect(mapStateToProps, { addSubtaskPrevious, deleteTask, deleteSubtask, isTaskComplete, isAllSubtaskComplete, isSubtaskComplete, changeMeanSort })(ToDoCategory)

export default ToDoCategoryContainer;