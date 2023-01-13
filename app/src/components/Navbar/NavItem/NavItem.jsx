import React from "react";
import { NavLink } from "react-router-dom";
import style from '../navbar.module.scss';

const NavItem = ({logo, link, title}) => {
    return (
        <div className={style.item}>
            {logo && <img className={style.nav_img} src={logo} alt='icon' />}
            <NavLink to={link} className={({ isActive }) => isActive ? style.item_a_active : style.item_a_inactive}>{title}</NavLink>
        </div>
    )
}

export default NavItem;