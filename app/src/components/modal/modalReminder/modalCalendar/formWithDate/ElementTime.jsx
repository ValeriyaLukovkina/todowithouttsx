import moment from "moment";
import React from "react";
import style from "./formWithDate.module.scss";

const ElementTime = (taskId, setTaskTime, el, setTemporaryTime) => {
    return (
        <div className={style.time_item}>
        <button
            onClick={() => {
                if (taskId) {
                    setTaskTime(taskId, moment(`${el}`, 'LT'))
                } else {
                    setTemporaryTime(moment(`${el}`, 'LT'))
                }

            }}
            className={style.time_item_btn}>{el}</button>
    </div>
    )
}

export default ElementTime;