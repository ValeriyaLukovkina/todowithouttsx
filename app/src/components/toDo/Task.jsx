import React, { useState } from "react";
import FormEditTaskContainer from "../Form/FormEditSubtask/FormEditTaskContainer";
import ModalListContainer from "../modal/modalList/modalListContainer";
import ModalReminderContainer from "../modal/modalReminder/modalReminderContainer";
import Subtasks from "./Subtasks";
import TaskInfo from "./TaskInfo";
import style from "./ToDo.module.scss"

const Task = ({ complete, isTaskComplete, changeAllSubtask, isSubtaskComplete, deleteTask, deleteSubtask, addSubtask, id, task, category, date, subtask, time }) => {
    const [showFullInfo, setShowFullInfo] = useState(true);
    const [openCategory, setOpenCategory] = useState(false);
    const [openReminder, setOpenReminder] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const toggle = () => {
        setShowFullInfo(!showFullInfo)
    }
    const onTaskComplite = (id, boolean) => {
        isTaskComplete(id, boolean)
        changeAllSubtask(id, boolean)
    }

    return (
        <div className={style.task_wrp}>
            <div className={style.task}>
                {complete ?
                    <button className={`${style.task_btn_complete} ${style.task_btn}`}
                        onClick={() => onTaskComplite(id, false)}>
                        <span className={style.task_btn_span_nocomplete + ' ' + style.task_btn_span}></span>
                    </button>
                    :
                    <button className={style.task_btn_nocomplete + ' ' + style.task_btn}
                        onClick={() => onTaskComplite(id, true)}>
                        <span className={style.task_btn_span}></span>
                    </button>
                }
                <div className={style.task_text}>
                    {complete && <div className={style.task_text_line_complete + ' ' + style.task_text_line}></div>}
                    {!complete && <div className={style.task_text_line_nocomplete + ' ' + style.task_text_line}></div>}
                    {id === editTask ? 
                <div className={style.task_text_edit}>
                <FormEditTaskContainer setEditTask={setEditTask} taskId={id} nameTask={task}/>
                </div>

                    : <p onClick={!complete ? () => setEditTask(id) : null} className={style.task_text_name}>{task}</p>}

                    {/* <p className={style.task_text_name}>{task}</p> */}
                    {!complete && <TaskInfo category={category} date={date} time={time} subtask={subtask} />}

                </div>
                <button
                    onClick={() => {
                        deleteTask(id)
                    }}
                    className={`${complete ? style.task_delete_visible : style.task_delete_hidden} ${style.task_delete}`}>
                </button>
                <button
                    className={style.task_show_more}
                    onClick={toggle}>
                    {showFullInfo ? 'show more' : 'hide'}
                </button>
            </div>
            {!showFullInfo &&
                <>
                    <Subtasks subtask={subtask} addSubtask = {addSubtask} isSubtaskComplete={isSubtaskComplete} id={id} date={date} time={time} deleteSubtask={deleteSubtask} category={category} />
                    <div className={style.subtask_changes}>
                        <button
                            onClick={() => setOpenReminder(true)}
                            className={style.subtask_changes_btn + ' ' + style.subtask_changes_remind}>remind</button>
                        <ModalReminderContainer taskId={id} date={date} time={time} isOpen={openReminder} onClose={() => setOpenReminder(false)} />
                        <button
                            onClick={() => setOpenCategory(true)}
                            className={style.subtask_changes_btn + ' ' + style.subtask_changes_list}>{category}</button>
                        <ModalListContainer isOpen={openCategory} taskId={id} category={category} onClose={() => setOpenCategory(false)} />
                    </div>
                </>
            }
        </div>
    )
}

export default Task;