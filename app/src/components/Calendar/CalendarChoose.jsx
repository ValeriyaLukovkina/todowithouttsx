import React from "react";
import style from "./calendar.module.scss";

const CalendarChoose = ( {previous, chooseToday, next } ) => {
    return (
        <div className={style.header_block_choose}>
    <button className={style.header_block_choose_btn} onClick={previous}>&lt;</button>
    <button className={style.header_block_choose_btn} onClick={chooseToday}>Today</button>
    <button className={style.header_block_choose_btn} onClick={next}>&gt;</button>
    </div>
    )
}

export default CalendarChoose;