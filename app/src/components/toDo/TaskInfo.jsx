import React from "react";
import style from "./toDo.module.scss";
import logoSubtask from "./../../assests/svg/Subtask.svg";
import moment from "moment";

const TaskInfo = ({ taskCategory, date, subtask, time }) => {
    const lengthCompleteSubtasks = subtask.reduce((acc, el) => {
        if (el.complete) {
            acc++
        }
        return acc
    }, 0)


    return (
        <div className={style.task_info}>
            {taskCategory &&
                <div className={style.task_info_block}>
                    <span className={style.task_info_block_txt}>{taskCategory}</span>
                </div>}
            {date &&
                <div className={style.task_info_block}>
                    <span className={style.task_info_block_txt}>{moment(date).format('DD.MM')}</span>
                </div>}
            {time &&
                <div className={style.task_info_block}>
                    <span className={style.task_info_block_txt}>{moment(time).format('HH:mm')}</span>
                </div>}
            {subtask && subtask.length > 0 &&
                <div className={style.task_info_block}>
                    <span className={style.task_info_block_txt}>{lengthCompleteSubtasks}/{subtask.length}</span>
                    <img className={style.task_info_block_logo} src={logoSubtask} alt='icon' />
                </div>}
        </div>
    )
}

export default TaskInfo;