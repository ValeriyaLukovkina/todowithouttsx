import React from "react";
import style from "./ToDo.module.scss";
import logoSubtask from "./../../assests/svg/Subtask.svg";
import moment from "moment";

const TaskInfo = ({ category, date, subtask, time }) => {
    const lengthCompleteSubtasks = subtask.reduce((acc, el) => {
        if (el.complete) {
            acc++
        }
        return acc
    }, 0)


    return (
        <div className={style.task_info}>
            {category &&
                <div className={style.task_info_block}>
                    <span className={style.task_info_block_txt}>{category}</span>
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