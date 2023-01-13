import React, { useRef, useState } from "react";
import moment from "moment";
import style from "./calendar.module.scss";
import { useEffect } from "react";
import ModalShowTasks from "./modalShowTasks/ModalShowTasks";


const CalendarCell = ({ tasks, dateCell }) => {
    const [filterTask, setFilterTask] = useState(undefined);
    useEffect(() => {
        setFilterTask(tasks.filter(task => moment(task.date).isSame(dateCell)))
    }, [tasks, dateCell]);

    const [showMore, setShowMore] = useState(false);

    const ref = useRef();
    const [coordCell, setCoordCell] = useState(null);
    useEffect(() => {
        setCoordCell(ref.current.getBoundingClientRect());
    }, [ref.current]);


    return (
        <div className={style.calendar_cell}>
            <p className={`${style.calendar_cell_p} ${moment().isSame(dateCell, 'day') ? style.calendar_cell_current : ''}`}>
                {dateCell.format('D')}
            </p>
            <div className={style.calendar_cell_tasks} ref={ref}>
                <ul className={style.calendar_cell_tasks_list}>
                    {filterTask && filterTask.slice(0, 2).map(task => {
                        return (<li key={task._id} className={style.calendar_cell_tasks_one + ' ' + style.calendar_cell_tasks_task}>
                            <button className={style.calendar_cell_tasks_btn}>{task.nameTask}</button>
                        </li>)
                    })
                    }
                    {filterTask && filterTask.length > 2 &&
                        <li className={style.calendar_cell_tasks_one + ' ' + style.calendar_cell_tasks_show}>
                            <button className={style.calendar_cell_tasks_btn} onClick={() => setShowMore(true)}>Show else {filterTask.length - 2}</button>
                        </li>}
                </ul>
                {showMore && <ModalShowTasks key={dateCell} coordCell={coordCell} setShowMore={setShowMore} dateCell={dateCell} filterTask={filterTask} />}
            </div>

        </div>
    )
}

export default CalendarCell