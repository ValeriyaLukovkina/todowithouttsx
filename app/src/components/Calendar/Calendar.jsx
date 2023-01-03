import React, { useState } from "react";
import style from "./Calendar.module.scss";
import moment from "moment";
import CalendarCell from "./CalendarCell";

const Calendar = ({ tasks }) => {
    debugger
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
        <div className={style.calendar_wrp}>
            <div className={'header ' + style.header_wrp}>
                <h2>Calendar</h2>

                <div className={style.header}>
                    <div className={style.header_block}>
                        <div className={style.header_block_date}>
                            <p className={style.header_block_date_p}>{day.format('MMMM')}</p>
                            <p className={style.header_block_date_p}>{day.format('YYYY')}</p>
                        </div>
                        <div className={style.header_block_choose}>
                            <button className={style.header_block_choose_btn} onClick={previousMonth}>&lt;</button>
                            <button className={style.header_block_choose_btn} onClick={chooseToday}>Today</button>
                            <button className={style.header_block_choose_btn} onClick={nextMonth}>&gt;</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className={'content ' + style.calendar}>
                {calendar.map(el => (
                    <div className={style.calendar_weekday}>
                        {(calendar[0] === el || calendar[1] === el || calendar[2] === el || calendar[3] === el ||
                            calendar[4] === el || calendar[5] === el || calendar[6] === el) &&
                            <p className={`${style.calendar_cell_p} ${moment().isSame(el, 'day') ? style.calendar_cell_current : ''}`}>
                                {el.format('ddd')}
                            </p>}
                            <CalendarCell tasks={tasks} dateCell={el}/>
                        {/* <div className={style.calendar_cell}>
                            <p className={`${style.calendar_cell_p} ${moment().isSame(el, 'day') ? style.calendar_cell_current : ''}`}>
                                {el.format('D')}
                            </p>
                            <div className={style.calendar_cell_tasks}>
                                <ul>
                                    {tasks.filter(task => moment(task.date).isSame(el)).map(task => {
                                        debugger
                                        return (<li className={style.calendar_cell_tasks_one}>
                                            <button className={style.calendar_cell_tasks_one}>{task.nameTask}</button>
                                        </li>)
                                    })}
                                </ul>
                            </div>

                        </div> */}
                    </div>))}
            </div>
        </div>
    )
}

export default Calendar;