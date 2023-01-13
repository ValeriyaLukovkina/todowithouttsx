import React from "react";
import { connect } from "react-redux";
import { nextMonth, previousMonth } from "../../../../redux/calendar-reducer";
import { setTaskDate, setTaskTime } from "../../../../redux/todo-reducer";
import ModalCalendar from "./ModalCalendar";

const mapStateToProps = (state, ownProps) => {
    return {
        date: ownProps.date,
        time: ownProps.time,
        taskId: ownProps.taskId,
        setTemporaryDate:ownProps.setTemporaryDate,
        setTemporaryTime:ownProps.setTemporaryTime,
        setTemporaryTaskCategory:ownProps.setTemporaryTaskCategory,
        listTime: state.calendar.listTime
    }
}

const ModalCalendarContainer = connect(mapStateToProps, { nextMonth, previousMonth, setTaskDate, setTaskTime })(ModalCalendar);

export default ModalCalendarContainer;