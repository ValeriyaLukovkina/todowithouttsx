import React from "react";
import style from "./modalShowTasks.module.scss";

const ModalShowTasks = ({ filterTask, dateCell }) => {
    return (
        <div className={style.modal}>
            <p className={style.modal_p}>{dateCell.format('ddd')}</p>
            <p className={style.modal_p}>{dateCell.format('D')}</p>
            <ul className={style.modal_list}>
                {filterTask && filterTask.map(task => {
                    debugger
                    return (<li className={style.modal_list_item}>
                        <button className={style.modal_list_btn}>{task.nameTask}</button>
                    </li>)
                })
                }
            </ul>
        </div>
    )
}

export default ModalShowTasks;