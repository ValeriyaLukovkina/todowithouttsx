import React from "react";
import style from "./ToDo.module.scss"

const Task = (props) => {
    return (
        <div className={style.task}>
            <button className={`${props.complete ? style.task_btn_complete : style.task_btn_nocomplete} ${style.task_btn}`}
                onClick={props.complete
                    ? () => props.isComplete(props.id, false)
                    : () => props.isComplete(props.id, true)}>
                <span
                    className={`${props.complete && style.task_btn_span_nocomplete} ${style.task_btn_span}`}>
                </span>
            </button>
            <div className={style.task_text}>
                <div className={`${props.complete ? style.task_text_line_complete : style.task_text_line_nocomplete} ${style.task_text_line}`}></div>
                <p>{props.task}</p>
                {!props.complete && <span className={style.task_text_category}>Category</span>}
            </div>
            <button
                onClick={() => {
                    props.deleteTask(props.id)
                }}
                className={`${props.complete ? style.task_delete_visible : style.task_delete_hidden} ${style.task_delete}`}>
            </button>
        </div>
    )
}

export default Task;