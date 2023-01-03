import React, { useState } from "react";
import FormAddSubtaskContainer from "../Form/FormAddSubtask/FormAddSubtaskContainer";
import style from "./ToDo.module.scss"

const Subtasks = ({ subtask, isSubtaskComplete, taskId, deleteSubtask, addSubtaskPrevious, category, date, time, }) => {
    const [editSubtask, setEditSubtask] = useState(null);
    const [addingSubtask, setAddingSubtask] = useState(false);

    const subtasks = subtask.map((el, index) => {
        return <div key={el._id} className={style.subtask}>
            {el.complete ?
                <button
                    onClick={() => isSubtaskComplete(taskId, el._id, false)}
                    className={`${style.task_btn_complete} ${style.task_btn} ${style.subtask_btn}`}>
                    <span className={style.task_btn_span_nocomplete + ' ' + style.task_btn_span}></span>
                </button>
                : <button
                    onClick={() => isSubtaskComplete(taskId, el._id, true)}
                    className={style.task_btn_nocomplete + ' ' + style.task_btn + ' ' + style.subtask_btn}>
                    <span className={style.task_btn_span}></span>
                </button>}
            <div className={style.task_text}>
                {el.complete && <div className={style.task_text_line_complete + ' ' + style.task_text_line}></div>}
                {!el.complete && <div className={style.task_text_line_nocomplete + ' ' + style.task_text_line}></div>}
                {!el.complete && (el._id === editSubtask || addingSubtask) ? 
                <FormAddSubtaskContainer adding={addingSubtask} setAddingSubtask={setAddingSubtask} setEditSubtask={setEditSubtask} taskId={taskId} subtaskId={el._id} nameSubtask={el.nameSubtask}/>

                    : <p onClick={() => {
                        setEditSubtask(el._id)
                    }} className={style.subtask_text}>{el.nameSubtask}</p>}

            </div>
            <button
                onClick={() => {
                    deleteSubtask(taskId, el._id)
                }}
                className={`${el.complete ? style.task_delete_visible : style.task_delete_hidden} ${style.task_delete}`}>
            </button>
        </div>
    })
    return (
        <div className={style.subtask_wrp}>
            {subtask && subtask.length > 0 && subtasks}

            <div
                onClick={() => {
                    setAddingSubtask(true)
                    addSubtaskPrevious(taskId, '')
                }}
                className={style.subtask}>
                <button
                    className={style.task_btn_nocomplete + ' ' + style.task_btn + ' ' + style.subtask_btn}>
                    <span className={style.task_btn_span}></span>
                </button>
                <div className={style.task_text}>
                    <div className={style.task_text_line_nocomplete + ' ' + style.task_text_line}></div>
                    <p className={style.subtask_text}>add subtask </p>
                </div>
            </div>
        </div>
    )
}

export default Subtasks;