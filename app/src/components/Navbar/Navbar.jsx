import React from "react";
import { NavLink } from "react-router-dom";
import s from  './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/todo" className={({isActive} ) => isActive ? s.active : undefined }>ToDo</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/calendar" className={({isActive} ) => isActive ? s.active : undefined }>calendar</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;