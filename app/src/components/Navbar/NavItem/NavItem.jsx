import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Navbar.module.scss';

const NavItem = (props) => {
    return (
        <div className={style.item}>
            <img className={style.nav_img} src={props.logo} alt='icon' />
            <NavLink to={props.link} className={({ isActive }) => isActive ? style.active : undefined}>{props.title}</NavLink>
        </div>
    )
}

export default NavItem;