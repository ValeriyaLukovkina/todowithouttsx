import moment from "moment";
import React, { useEffect, useState } from "react";
import style from "../calendar.module.scss";
import CalendarCell from "../CalendarCell"

const CalendarMonth = ({ tasks, day }) => {
    const startDay = day.clone().startOf('month').startOf('week').subtract(1, 'day');
    const endDay = day.clone().endOf('month').endOf('week').subtract(1, 'day');


    const amountDay = endDay.diff(startDay, 'days') + 1;
    const calendar = [...Array(amountDay)].map(() => startDay.add(1, 'day').clone());
    const [countRows, setCountRows] = useState(0);

    useEffect(() => {
        setCountRows(Math.ceil(amountDay / 7))
    }, [amountDay])
    return (
        <div className={'content ' + style.calendar} style={{ gridTemplateRows: `repeat(${countRows}, 1fr)` }}>
            {calendar.map(el => {
                return (
                    <div key={el} className={style.calendar_weekday}>
                        {(calendar[0] === el || calendar[1] === el || calendar[2] === el || calendar[3] === el ||
                            calendar[4] === el || calendar[5] === el || calendar[6] === el) &&
                            <p className={`${style.calendar_cell_p} ${moment().isSame(el, 'day') ? style.calendar_cell_current : ''}`}>
                                {el.format('ddd')}
                            </p>}
                        <CalendarCell tasks={tasks} dateCell={el} />
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarMonth;