import React from "react";
import { useState } from "react";
import Form from "../Form";


const FormAddSubtask = ({ adding, nameSubtask, taskId, subtaskId, changeSubtask, setEditSubtask, deleteSubtask, setAddingSubtask }) => {
    const [oldNameSubtask, setOldNameSubtask] = useState(nameSubtask)
    const handleBlur = (newNameSubtask) => {
        if (newNameSubtask.trim()) {
            changeSubtask(taskId, subtaskId, newNameSubtask);
            setEditSubtask(null)
            setOldNameSubtask(newNameSubtask)
            // 
        } else if (!oldNameSubtask && adding) {
            if (!newNameSubtask.trim()) {
               deleteSubtask(taskId, subtaskId) 
            }
            setAddingSubtask(false)
        } else {
            changeSubtask(taskId, subtaskId, oldNameSubtask)
            setEditSubtask(null)
            setAddingSubtask(false)
        }
    }
    return (
        <>
<Form nameForm={'subtask'} initVal={nameSubtask} handleBlur={handleBlur}/>
        </>
    )
}

export default FormAddSubtask;