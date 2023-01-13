import React, { useState } from "react";
import FormEditTaskContainer from "../form/formEditSubtask/FormEditTaskContainer";
import ModalListContainer from "../modal/modalList/ModalListContainer";
import ModalReminderContainer from "../modal/modalReminder/ModalReminderContainer";
import Subtasks from "./Subtasks";
import TaskInfo from "./TaskInfo";
import style from "./toDo.module.scss"

const Task = ({ complete, isTaskComplete, isAllSubtaskComplete, isSubtaskComplete, deleteTask, 
    deleteSubtask, addSubtaskPrevious, taskId, nameTask, taskCategory, date, subtask, time, titleCategory }) => {
        debugger
    const [showFullInfo, setShowFullInfo] = useState(true);
    const [openCategory, setOpenCategory] = useState(false);
    const [openReminder, setOpenReminder] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const toggle = () => {
        setShowFullInfo(!showFullInfo)
    }
    const onTaskComplite = (taskId, boolean) => {
        isTaskComplete(taskId, boolean)
        isAllSubtaskComplete(taskId, boolean)
    }

    return (
        <div className={style.task_wrp}>
            <div className={style.task}>
                {complete ?
                    <button className={`${style.task_btn_complete} ${style.task_btn}`}
                        onClick={() => onTaskComplite(taskId, false)}>
                        <span className={style.task_btn_span_nocomplete + ' ' + style.task_btn_span}></span>
                    </button>
                    :
                    <button className={style.task_btn_nocomplete + ' ' + style.task_btn}
                        onClick={() => onTaskComplite(taskId, true)}>
                        <span className={style.task_btn_span}></span>
                    </button>
                }
                <div className={style.task_text}>
                    {complete && <div className={style.task_text_line_complete + ' ' + style.task_text_line}></div>}
                    {!complete && <div className={style.task_text_line_nocomplete + ' ' + style.task_text_line}></div>}
                    {taskId === editTask ?
                        <div className={style.task_text_edit}>
                            <FormEditTaskContainer setEditTask={setEditTask} taskId={taskId} nameTask={nameTask} />
                        </div>

                        : <p onClick={!complete ? () => setEditTask(taskId) : null} className={style.task_text_name + ' ' + (complete && style.task_text_name_disable)}>{nameTask}</p>}

                    {!complete && <TaskInfo taskCategory={taskCategory} date={date} time={time} subtask={subtask} />}

                </div>
                <button
                    onClick={() => {
                        deleteTask(taskId)
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
                    <Subtasks isTaskComplete={isTaskComplete} completeTask={complete} subtask={subtask} addSubtaskPrevious={addSubtaskPrevious} isSubtaskComplete={isSubtaskComplete} taskId={taskId} date={date} time={time} deleteSubtask={deleteSubtask} taskCategory={taskCategory} />
                    <div className={style.subtask_changes}>
                        <button
                            onClick={() => setOpenReminder(true)}
                            className={style.subtask_changes_btn + ' ' + style.subtask_changes_remind}>remind</button>
                        <ModalReminderContainer taskId={taskId} date={date} time={time} isOpen={openReminder} onClose={() => setOpenReminder(false)} />
                        <button
                            onClick={() => setOpenCategory(true)}
                            className={style.subtask_changes_btn + ' ' + style.subtask_changes_list}>{taskCategory ? taskCategory : 'Common'}</button>
                        <ModalListContainer isOpen={openCategory} taskId={taskId} taskCategory={taskCategory} onClose={() => setOpenCategory(false)} />
                    </div>
                </>
            }
        </div>
    )
}

export default Task;