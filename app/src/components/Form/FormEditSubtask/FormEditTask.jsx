import React from "react";
import Form from "../Form";


const FormEditTask = ({ nameTask, taskId, changeTaskName, setEditTask }) => {
    const handleBlur = (newNameTask) => {

        if (newNameTask.trim()) {
            changeTaskName(taskId, newNameTask);
            setEditTask(null)
        } else {
            setEditTask(null)
        }
    }
    return (
        <>
            <Form nameForm={'task'} initVal={nameTask} handleBlur={handleBlur} />
        </>
    )
}

export default FormEditTask;