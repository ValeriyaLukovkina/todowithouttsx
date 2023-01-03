import React from "react";
import { connect } from "react-redux";
import { changeMeanSort } from "../../../redux/sort-reducer";
import { addSubtaskPrevious, deleteSubtask, deleteTask, isAllSubtaskComplete, isSubtaskComplete, isTaskComplete } from "../../../redux/todo-reducer";
import ToDoWeek from "./ToDoWeek";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        dateBlock: state.sort.dateBlock,
    }
}

const ToDoWeekContainer = connect(mapStateToProps, { addSubtaskPrevious, deleteTask, deleteSubtask, isTaskComplete, isAllSubtaskComplete, isSubtaskComplete, changeMeanSort })(ToDoWeek)

export default ToDoWeekContainer;