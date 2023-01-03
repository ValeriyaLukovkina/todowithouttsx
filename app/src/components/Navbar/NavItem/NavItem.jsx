import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Navbar.module.scss';

const NavItem = ({logo, link, title}) => {
    return (
        <div className={style.item}>
            {logo && <img className={style.nav_img} src={logo} alt='icon' />}
            <NavLink to={link} className={style.item_a}>{title}</NavLink>
        </div>
    )
}

export default NavItem;