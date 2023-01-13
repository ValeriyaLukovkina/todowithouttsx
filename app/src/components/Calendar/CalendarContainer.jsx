import React from "react";
import { connect } from "react-redux";
import { changeCalendarView } from "../../redux/calendar-reducer";
import Calendar from "./Calendar";

const mapStateToProps = (state) => {
    return {
        tasks: state.toDo.tasks,
        calendarViewArr: state.calendar.calendarViewArr,
        calendarView: state.calendar.calendarView,
        listTime: state.calendar.listTime
    }
}

const CalendarContainer = connect(mapStateToProps, { changeCalendarView })(Calendar)

export default CalendarContainer;