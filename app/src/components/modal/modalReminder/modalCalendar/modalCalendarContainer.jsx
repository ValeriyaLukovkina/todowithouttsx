import React from "react";
import { connect } from "react-redux";
import { nextMonth, previousMonth } from "../../../../redux/calendar-reducer";
import { choiceDate, choiceTime } from "../../../../redux/todo-reducer";
import ModalCalendar from "./modalCalendar";

const mapStateToProps = (state, ownProps) => {
    return {
        date: ownProps.date,
        time: ownProps.time,
        taskId: ownProps.taskId,
    }
}

const ModalCalendarContainer = connect(mapStateToProps, { nextMonth, previousMonth, choiceDate, choiceTime })(ModalCalendar);

export default ModalCalendarContainer;