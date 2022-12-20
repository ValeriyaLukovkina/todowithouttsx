import React from "react";
import { useState } from "react";
// import { changeTask } from "../../../redux/todo-reducer";
import Form from "../Form";


const FormEditTask = ({ nameTask, taskId, changeTask, setEditTask }) => {
    // const [oldNameSubtask, setOldNameSubtask] = useState(nameTask)
    const handleBlur = (newNameTask) => {

        if (newNameTask.trim()) {
            changeTask(taskId, newNameTask);
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