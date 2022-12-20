import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.scss';
import logoAvatar from './../../assests/svg/Avatar.svg';
import logoToday from './../../assests/svg/Today.svg';
import logoWeek from './../../assests/svg/Week.svg';
import logoTasks from './../../assests/svg/Tasks.svg';
import NavItem from "./NavItem/NavItem";

const Navbar = () => {

    return (
        <nav className={style.nav}>
            <div className={style.item + ' ' + style.name}>
                <img className={style.nav_img + ' ' + style.name_img} src={logoAvatar} alt='avatar' />
                <p className={style.name_text}>Name</p>
            </div>
            <div className={style.item}>
                <div className={style.today}>
                    <img className={style.nav_img + ' ' + style.today_img} src={logoToday} alt='icon' />
                    <span className={style.today_num}>31</span>
                </div>
                <NavLink to="/today" className={({ isActive }) => isActive ? style.active : undefined}>ToDo</NavLink>
            </div>
            <NavItem logo={logoWeek} link={'/next-week'} title={'Week'} onClick={() => console.log('click')} />
            <NavItem logo={logoTasks} link={'/tasks'} title={'All tasks'} onClick={() => console.log('click')} />
            <NavItem logo={logoTasks} link={'/calendar'} title={'calendar'} onClick={() => console.log('click')} />

            {/* <div className={style.item}>
                <img className={style.nav_img} src={logoWeek} alt='icon' />
                <NavLink to="/next-week" className={({ isActive }) => isActive ? style.active : undefined}>Week</NavLink>
            </div> */}
            {/* <div className={style.item}>
            <img className={style.nav_img} src={logoTasks} alt='icon' />
                <NavLink to="/tasks" className={({ isActive }) => isActive ? style.active : undefined}>All tasks</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? style.active : undefined}>calendar</NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar;