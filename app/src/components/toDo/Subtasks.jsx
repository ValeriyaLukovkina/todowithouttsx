import React, { useState } from "react";
import FormAddSubtaskContainer from "../Form/FormAddSubtask/FormAddSubtaskContainer";
import ModalListContainer from "../modal/modalList/modalListContainer";
import ModalReminderContainer from "../modal/modalReminder/modalReminderContainer";
// import ModalListContainer from "../modalList/modalListContainer";
// import ModalReminderContainer from "../modalReminder/modalReminderContainer";
import style from "./ToDo.module.scss"

const Subtasks = ({ subtask, isSubtaskComplete, id, deleteSubtask, addSubtask, category, date, time, }) => {
    // const [openCategory, setOpenCategory] = useState(false);
    // const [openReminder, setOpenReminder] = useState(false);
    const [editSubtask, setEditSubtask] = useState(null);
    // const [addSubtask, setAddSubtask] = useState(false);
    const [addingSubtask, setAddingSubtask] = useState(false);

    //     const calendar = [...Array(amountDay)].map(() => startDay.add(1, 'day').clone());

    const subtasks = subtask.map((el, index) => {

        return <div key={el.id} className={style.subtask}>
            {el.complete ?
                <button
                    onClick={() => isSubtaskComplete(id, el.id, false)}
                    className={`${style.task_btn_complete} ${style.task_btn} ${style.subtask_btn}`}>
                    <span className={style.task_btn_span_nocomplete + ' ' + style.task_btn_span}></span>
                </button>
                : <button
                    onClick={() => isSubtaskComplete(id, el.id, true)}
                    className={style.task_btn_nocomplete + ' ' + style.task_btn + ' ' + style.subtask_btn}>
                    <span className={style.task_btn_span}></span>
                </button>}
            <div className={style.task_text}>
                {el.complete && <div className={style.task_text_line_complete + ' ' + style.task_text_line}></div>}
                {!el.complete && <div className={style.task_text_line_nocomplete + ' ' + style.task_text_line}></div>}
                {!el.complete && (el.id === editSubtask || addingSubtask) ? 
                // <div className={style.task_text_edit}>
                <FormAddSubtaskContainer adding={addingSubtask} setAddingSubtask={setAddingSubtask} setEditSubtask={setEditSubtask} taskId={id} subtaskId={el.id} nameSubtask={el.name}/>
                // </div>

                    : <p onClick={() => {

                        setEditSubtask(el.id)
                    }} className={style.subtask_text}>{el.name}</p>}

            </div>
            <button
                onClick={() => {
                    deleteSubtask(id, el.id)
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
                    addSubtask(id, '')
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
            {/* <div className={style.subtask_changes}>
                <button
                    onClick={() => setOpenReminder(true)}
                    className={style.subtask_changes_btn + ' ' + style.subtask_changes_remind}>remind</button>
                <ModalReminderContainer taskId={id} date={date} time={time} isOpen={openReminder} onClose={() => setOpenReminder(false)} />
                <button
                    onClick={() => setOpenCategory(true)}
                    className={style.subtask_changes_btn + ' ' + style.subtask_changes_list}>{category}</button>
                <ModalListContainer isOpen={openCategory} taskId={id} category={category} onClose={() => setOpenCategory(false)} />
            </div> */}
        </div>
    )
}

export default Subtasks;