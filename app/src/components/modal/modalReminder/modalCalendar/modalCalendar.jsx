import React, { useState } from "react";
import moment from "moment";
import style from './modalCalendar.module.scss'
import ChoiceDate from "./formWithDate/ChoiceDate";
import ChoiceTime from "./formWithDate/ChoiceTime";

const ModalCalendar = ({ date, taskId, setTaskDate, setTaskTime, time, setTemporaryDate, setTemporaryTime, listTime }) => {
    window.moment = moment;
    moment.updateLocale('en', { week: { dow: 1 } });
    const [day, setDay] = useState(moment());
    const startDay = day.clone().startOf('month').startOf('week').subtract(1, 'day');
    const endDay = day.clone().endOf('month').endOf('week').subtract(1, 'day');

    const amountDay = endDay.diff(startDay, 'days') + 1;
    const calendar = [...Array(amountDay)].map(() => startDay.add(1, 'day').clone());

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
        <div className={style.calendar}>
            <div className={style.calendar_choose}>
                <div className={style.calendar_choose_block + ' ' + style.calendar_choose_date}>
                    <h4 className={style.calendar_choose_block_title}>date</h4>
                    <ChoiceDate taskId={taskId} setTaskDate={setTaskDate} date={date} setTemporaryDate={setTemporaryDate}/>
                </div>
                <div className={style.calendar_choose_block + ' ' + style.calendar_choose_time}>
                    <h4 className={style.calendar_choose_block_title}>time</h4>
                    <ChoiceTime taskId={taskId} setTaskTime={setTaskTime} time={time} setTemporaryTime={setTemporaryTime} date={date} listTime={listTime}/>
                </div>
            </div>
            <div className={style.calendar_header}>
                <div className={style.calendar_header_date}>
                    <h3 className={style.calendar_header_txt}>{day.format('MMMM')}</h3>
                    <h3 className={style.calendar_header_txt}> {day.format('YYYY')}</h3>
                </div>
                <div className={style.calendar_header_block}>
                    <button
                        className={style.calendar_header_block_btn + ' ' + style.calendar_header_block_previous}
                        onClick={previousMonth}>&lt;</button>
                    <button
                        className={style.calendar_header_block_btn + ' ' + style.calendar_header_block_today}
                        onClick={chooseToday}>Today</button>
                    <button
                        className={style.calendar_header_block_btn + ' ' + style.calendar_header_block_next}
                        onClick={nextMonth}>&gt;</button>
                </div>
            </div>
            <div className={style.calendar_table}>
                {calendar.map(el => (
                    <div key={el} className={style.calendar_table_cell}>
                        {moment().subtract(1, 'day').isAfter(el) ?
                            <button disabled className={style.calendar_table_cell_btn_disable}>{el.format('D')}</button>
                            : <button
                                onClick={() => {
                                    if (taskId) {
                                    setTaskDate(taskId, moment(el))                                        
                                    } else {
                                        setTemporaryDate(el)
                                    }
                                }}
                                className={`${date && moment(date).isSame(el, 'day') ? style.calendar_table_cell_current : ''} ${style.calendar_table_cell_btn}`}>
                                {el.format('D')}
                            </button>
                        }
                    </div>))}
            </div>
        </div>
    )
}

export default ModalCalendar;