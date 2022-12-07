import React, { useState } from "react";
import style from "./Calendar.module.scss";
import moment from "moment";

const Calendar = (props) => {

    moment.updateLocale('en', { week: { dow: 1 } });

    const [day, setDay] = useState(moment());
    const startDay = day.clone().startOf('month').startOf('week').subtract(1, 'day');
    const endDay = day.clone().endOf('month').endOf('week').subtract(1, 'day');


    const amountDay = endDay.diff(startDay, 'days') + 1;
    const calendar = [...Array(amountDay)].map(() => startDay.add(1, 'day').clone());

    console.log('moment' + moment() + 'day' + day + moment().isSame(day));

    const nextMonth = () => {
        setDay(prev => prev.clone().add(1, 'month'))
    }
    const previousMonth = () => {
        setDay(prev => prev.clone().subtract(1, 'month'))
    }
    const chooseToday = () => {
        setDay(moment())
    }
    return (
        <div>
            <div>Calendar</div>

            <div className={style.header}>
                <div className={style.header_date}>
                    <p>{day.format('MMMM')}</p>
                    <p>{day.format('YYYY')}</p>
                </div>
                <div className={style.header_block}>
                    <button onClick={previousMonth}>&lt;</button>
                    <button onClick={chooseToday}>Today</button>
                    <button onClick={nextMonth}>&gt;</button>
                </div>
            </div>
            <div className={style.calendar}>
                {calendar.map(el => (
                <div className={style.calendar_cell}>
                    <p className={`${moment().isSame(el, 'day') ? style.calendar_cell_current : ''}`}>
                        {el.format('D')}
                    </p>
                </div>))}
            </div>
        </div>
    )
}

export default Calendar;