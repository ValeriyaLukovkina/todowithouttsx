import React from "react";
import { connect } from "react-redux";
import ModalReminder from "./ModalReminder";

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.toDo.tasks,
        date: ownProps.date,
        time: ownProps.time,
        taskId: ownProps.taskId,
        setTemporaryDate: ownProps.setTemporaryDate,
        setTemporaryTime: ownProps.setTemporaryTime,
        isOpen: ownProps.isOpen,
        onClose: ownProps.onClose,
    }
}

const ModalReminderContainer = connect(mapStateToProps, {})(ModalReminder);

export default ModalReminderContainer;