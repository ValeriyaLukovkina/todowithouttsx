import moment from "moment";
import React from "react";
import style from "../calendar.module.scss";

const CalendarWeek = ({ tasks, day }) => {
    const startDay = day.clone().startOf('week').subtract(1, 'day');
    const endDay = day.clone().endOf('week').subtract(1, 'day');

    const amountDay = endDay.diff(startDay, 'days') + 1;
    const calendar = [...Array(amountDay)].map(() => startDay.add(1, 'day').clone());

    return (
        <div className={'content ' + style.week}>
            {calendar.map(el => {
                return (

                    <div key={el} className={style.week_weekday}>
                        <p className={`${style.calendar_cell_p} ${moment().isSame(el, 'day') ? style.calendar_cell_current : ''}`}>
                            {el.format('ddd')}
                        </p>
                        <p> {el.format('D')}</p>
                        <div>
                            { }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CalendarWeek;