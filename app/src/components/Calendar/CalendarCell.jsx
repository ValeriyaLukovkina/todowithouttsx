import React, { useState } from "react";
import moment from "moment";
import style from "./Calendar.module.scss";
import { useEffect } from "react";
import ModalShowTasks from "./modalShowTasks/modalShowTasks";


const CalendarCell = ({ tasks, dateCell }) => {
    const [filterTask, setFilterTask] = useState(undefined);
    useEffect(() => {
        setFilterTask(tasks.filter(task => moment(task.date).isSame(dateCell)))
    }, [tasks, dateCell]);

    // const [showMore, setShowMore] = useState(false);

    return (
        <div className={style.calendar_cell}>
            <p className={`${style.calendar_cell_p} ${moment().isSame(dateCell, 'day') ? style.calendar_cell_current : ''}`}>
                {dateCell.format('D')}
            </p>
            <div className={style.calendar_cell_tasks}>
                <ul className={style.calendar_cell_tasks_list}>
                    {filterTask && filterTask.slice(0, 2).map(task => {
                        debugger
                        return (<li className={style.calendar_cell_tasks_one + ' ' + style.calendar_cell_tasks_task}>
                            <button className={style.calendar_cell_tasks_btn}>{task.nameTask}</button>
                        </li>)
                    })
                    }
                    {filterTask && filterTask.length > 2 &&
                        <li className={style.calendar_cell_tasks_one + ' ' + style.calendar_cell_tasks_show}>
                            <button className={style.calendar_cell_tasks_btn}>Show else {filterTask.length - 2}</button>
                        </li>}
                </ul>
                {/* {showMore && <ModalShowTasks dateCell={dateCell} filterTask={filterTask} />} */}
            </div>

        </div>
    )
}

export default CalendarCell