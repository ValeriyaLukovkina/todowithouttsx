import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.scss';
import logoAvatar from './../../assests/svg/Avatar.svg';
import logoToday from './../../assests/svg/Today.svg';
import logoWeek from './../../assests/svg/Week.svg';
import logoTasks from './../../assests/svg/Tasks.svg';
import NavItem from "./NavItem/NavItem";
import ModalAddCategoryContainer from "../modal/modalAddCategory/modalAddCategoryContainer";

const Navbar = ({ categories, logout, deleteCategory, userId, firstName }) => {
    const [showCategory, setShowCategory] = useState(true);
    const [openModalCategory, setOpenModalCategory] = useState(false);

    const categoryItem = categories.map(el => {

        return <div className={style.categoryItem}>
            <NavItem logo={null} link={`/tasks/category/${el.title}`} title={el.title} />
            <button 
            className={style.categoryItem_btn}
             onClick={() => {
                 deleteCategory(userId, el._id)}}>
                del
            </button>
        </div>
    })
    return (
        <nav className={style.nav}>
            <div className={style.item + ' ' + style.name}>
                <img className={style.nav_img + ' ' + style.name_img} src={logoAvatar} alt='avatar' />
                <p className={style.name_text}>{firstName}</p>
            </div>
            <div className={style.item}>
                <div className={style.today}>
                    <img className={style.nav_img + ' ' + style.today_img} src={logoToday} alt='icon' />
                    <span className={style.today_num}>31</span>
                </div>
                <NavLink to="/day" className={style.item_a}>ToDo</NavLink>
            </div>
            {/* <NavItem logo={logoToday} link={'/day'} title={'My day'} onClick={() => console.log('click')} /> */}
            <NavItem logo={logoWeek} link={'/week'} title={'Week'} onClick={() => console.log('click')} />
            <NavItem logo={logoTasks} link={'/tasks'} title={'All tasks'} onClick={() => console.log('click')} />
            <NavItem logo={logoTasks} link={'/calendar'} title={'calendar'} onClick={() => console.log('click')} />
            <div className={style.categories}>
                <div
                    className={style.categories_title}>
                    <p
                        onClick={() => {
                            setShowCategory(!showCategory)
                        }}
                        className={style.categories_title_name}>My Category</p>
                    <div className={style.categories_title_btn_wrp}>
                        <button
                            onClick={() => setOpenModalCategory(true)}
                            className={style.categories_title_btn + ' ' + (!showCategory && style.categories_title_btn_hidden)}>
                            +
                        </button>
                        {openModalCategory && <ModalAddCategoryContainer onClose={() => setOpenModalCategory(false)} />}
                        <span className={style.categories_title_count + ' ' + (showCategory && style.categories_title_btn_hidden)}>{categoryItem.length}</span>
                    </div>
                </div>
                {showCategory && categoryItem}
            </div>
            <button onClick={logout}>log out</button>
        </nav>
    )
}

export default Navbar;