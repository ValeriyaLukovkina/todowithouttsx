import React from "react";
import { connect } from "react-redux";
import { nextMonth, previousMonth } from "../../redux/calendar-reducer";
import Calendar from "./Calendar";

const mapStateToProps = (state) => {
    return {
        // date: state.calendar.date,
        // startDay: state.calendar.startDay,
        // endDay: state.calendar.endDay,
        // tasks: state.toDo.tasks,
    }
}

const CalendarContainer = connect(mapStateToProps, { nextMonth, previousMonth})(Calendar)

export default CalendarContainer;