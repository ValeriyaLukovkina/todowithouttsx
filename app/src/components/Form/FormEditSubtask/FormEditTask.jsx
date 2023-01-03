import React from "react";
import Form from "../Form";


const FormEditTask = ({ nameTask, taskId, changeTaskName, setEditTask }) => {
    // const [oldNameSubtask, setOldNameSubtask] = useState(nameTask)
    const handleBlur = (newNameTask) => {

        if (newNameTask.trim()) {
            changeTaskName(taskId, newNameTask);
            setEditTask(null)
            // setOldNameSubtask(newNameSubtask)
        } else {
            // changeTask(taskId, taskId, oldNameSubtask)
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