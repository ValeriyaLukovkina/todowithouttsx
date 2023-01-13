import React from "react";
import { useState } from "react";
import Form from "../Form";


const FormAddSubtask = ({ adding, nameSubtask, taskId, subtaskId, changeSubtaskName, setEditSubtask, deleteSubtaskPrevious, setAddingSubtask, addSubtask, changeSubtaskPrevious }) => {
    const [oldNameSubtask, setOldNameSubtask] = useState(nameSubtask)
    const handleBlur = (newNameSubtask) => {

        if ((!oldNameSubtask || !oldNameSubtask.trim())  && adding) {
            if (newNameSubtask && newNameSubtask.trim()) {
                changeSubtaskPrevious(taskId, newNameSubtask);
                addSubtask(taskId, newNameSubtask);
            } else if (!newNameSubtask || !newNameSubtask.trim()) {
                deleteSubtaskPrevious(taskId)
            }
            setAddingSubtask(false)
        } else if (newNameSubtask && newNameSubtask.trim()) {
            changeSubtaskName(taskId, subtaskId, newNameSubtask);
            setEditSubtask(null)
        } else {
            changeSubtaskName(taskId, subtaskId, oldNameSubtask)
            setEditSubtask(null)
            setAddingSubtask(false)
        }
    }
    return (
        <>
            <Form nameForm={'subtask'} initVal={nameSubtask} handleBlur={handleBlur} />
        </>
    )
}

export default FormAddSubtask;