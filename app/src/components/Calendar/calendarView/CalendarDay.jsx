import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { sortByDateCalendar } from "../../../utils/sort-helper";
import style from "../calendar.module.scss";

const CalendarDay = ({ tasks, day, listTime }) => {
    const [taskGroupDate, setTaskGroupDate] = useState(null);
    useEffect(() => {
        setTaskGroupDate(sortByDateCalendar(tasks, day));
    }, [tasks, day])

    return (
        <div className={style.day}>
            <div className={style.day_header}>
                <div className={style.day_header_gmt}>
                    <p className={style.day_time + ' ' + style.day_header_gmt_text}>GMT {moment().format('Z').substr(0, 3)}</p>
                </div>
                <div className={style.day_header_block}>
                    <div className={style.day_header_block_date_wrp}>
                        <div className={style.day_header_block_date}>
                            <h4 className={style.day_header_block_date_week}>
                                {day.format('ddd')}
                            </h4>
                            <h3 className={style.day_header_block_date_day}>
                                {day.format('D')}
                            </h3>
                        </div>
                        <div></div>
                    </div>
                    <div className={style.day_header_block_tasks}>
                        {taskGroupDate && taskGroupDate.map(task => {
                            if (!task.time) {
                                return (<div key={task._id} className={style.day_header_block_tasks_task}>
                                    {task.nameTask}
                                </div>)
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className={style.day_main}>
                <div>
                    {listTime.map(time => {
                        return (
                            <div key={time} className={style.day_main_time_extra + ' ' + (time.slice(-2) === '00' && style.day_main_time)}>
                                <span className={style.day_main_time_span + ' ' + style.day_time}>{(time === '00:00' || time.slice(-2) !== '00') ? ' ' : time}</span>
                                <div className={style.day_main_tasks}>
                                    {taskGroupDate && taskGroupDate.map(task => {
                                        if (moment(task.time).format('HH:mm') === time) {
                                            return (<div key={task._id} className={style.day_header_block_tasks_task + ' ' + style.day_main_tasks_task}>
                                                <span>{task.nameTask}</span>
                                            </div>)
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

window.moment = moment;

export default CalendarDay;