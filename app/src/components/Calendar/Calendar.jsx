import React, { useState, useEffect } from "react";
import style from "./calendar.module.scss";
import moment from "moment";
import { useRef } from "react";
import CalendarMonth from "./calendarView/CalendarMonth";
import CalendarWeek from "./calendarView/CalendarWeek";
import CalendarDay from "./calendarView/CalendarDay";
import CalendarChoose from "./CalendarChoose";

const Calendar = ({ tasks, calendarViewArr, calendarView, changeCalendarView, listTime }) => {
    moment.updateLocale('en', { week: { dow: 1 } });

    const [day, setDay] = useState(moment());


    const nextMonth = () => {
        setDay(prev => prev.clone().add(1, 'month'))
    }
    const previousMonth = () => {
        setDay(prev => prev.clone().subtract(1, 'month'))
    }

    const nextWeek = () => {
        setDay(prev => prev.clone().add(1, 'week'))
    }
    const previousWeek = () => {
        setDay(prev => prev.clone().subtract(1, 'week'))
    }

    const nextDay = () => {
        setDay(prev => prev.clone().add(1, 'day'))
    }
    const previousDay = () => {
        setDay(prev => prev.clone().subtract(1, 'day'))
    }

    const chooseToday = () => {
        setDay(moment())
    }

    const [showChoice, setShowChoice] = useState(false);

    const change = (el) => {
        changeCalendarView(el)
        setShowChoice(false)
    }

    return (
        <div className={style.calendar_wrp}>
            <div className={'header ' + style.header_wrp}>
                <div className={style.title}>
                    <h2 className={style.title_text}>Calendar</h2>
                    <div className={style.title_select}>
                        <div onClick={() => setShowChoice(true)} className={style.title_select_block}>
                            <p className={style.title_select_block_text}>{calendarView}</p>
                            <span className={style.title_select_block_arrow}></span>
                        </div>
                        {showChoice && <div onClick={() => setShowChoice(false)} className={style.title_select_list_wrp}></div>}
                        <div className={`${showChoice && style.title_select_list_visible} ${style.title_select_list}`}>
                            {calendarViewArr.map(el => {
                                return <div key={el} className={style.title_select_list_text}>
                                    <button className={style.title_select_list_text_btn} onClick={() => change(el)}>{el}</button>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className={style.header}>
                    <div className={style.header_block}>
                        <div className={style.header_block_date}>
                            <p className={style.header_block_date_p}>{day.format('MMMM')}</p>
                            <p className={style.header_block_date_p}>{day.format('YYYY')}</p>
                        </div>
                        {calendarView === 'Month' && <CalendarChoose previous={previousMonth} chooseToday={chooseToday} next={nextMonth} />}
                        {/* {calendarView === 'Week' && <CalendarChoose previous={previousWeek} chooseToday={chooseToday} next={nextWeek} />} */}
                        {calendarView === 'Day' && <CalendarChoose previous={previousDay} chooseToday={chooseToday} next={nextDay} />}
                    </div>
                    <div></div>
                </div>
            </div>
            {calendarView === 'Month' && <CalendarMonth tasks={tasks} day={day} />}
            {/* {calendarView === 'Week' && <CalendarWeek tasks={tasks} day={day} />} */}
            {calendarView === 'Day' && <CalendarDay tasks={tasks} day={day} listTime={listTime} />}

        </div>
    )
}

export default Calendar;