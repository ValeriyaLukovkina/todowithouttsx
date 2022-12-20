import React from "react";
import { useState } from "react";
import Form from "../Form";


const FormEditTask = ({ nameTask, taskId, updateNameTask, setEditTask }) => {
    // const [oldNameSubtask, setOldNameSubtask] = useState(nameTask)
    const handleBlur = (newNameTask) => {

        if (newNameTask.trim()) {
            updateNameTask(taskId, newNameTask);
            setEditTask(null)
            // setOldNameSubtask(newNameSubtask)
        } else {
            // changeTask(taskId, taskId, oldNameSubtask)
            setEditTask(null)
        }
    }
    return (
        <>
<Form nameForm={'task'} initVal={nameTask} handleBlur={handleBlur}/>
        </>
    )
}

export default FormEditTask;