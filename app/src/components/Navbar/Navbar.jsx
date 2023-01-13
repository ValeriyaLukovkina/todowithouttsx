import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from './navbar.module.scss';
import logoAvatar from './../../assests/svg/Avatar.svg';
import logoToday from './../../assests/svg/Today.svg';
import logoWeek from './../../assests/svg/Week.svg';
import logoTasks from './../../assests/svg/Tasks.svg';
import moment from "moment"
import NavItem from "./navItem/NavItem";
import ModalAddCategoryContainer from "../modal/modalAddCategory/ModalAddCategoryContainer";
import logoDelete from '../../assests/svg/Delete.svg'
import { useEffect } from "react";
import ModalDeleteCategoryContainer from "../modal/modalDeleteCategory/ModalDeleteCategoryContainer";

const Navbar = ({ categories, logout, deleteCategory, userId, firstName }) => {

    const ref = useRef();
    const [height, setHeight] = useState(0);


    useEffect(() => {
        setHeight(document.documentElement.clientHeight - ref.current.clientHeight - 140)
    }, [ref])
    debugger

    const [showCategory, setShowCategory] = useState(true);
    const [openModalCategory, setOpenModalCategory] = useState(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [confirmDeleteId, setConfirmDeleteId] = useState()

    const categoryItem = categories.map(el => {

        return <div key={el._id} className={style.categoryItem}>
            <NavItem logo={null} link={`/category/${el.title}`} title={el.title} />
            <button
                className={style.categoryItem_btn}
                onClick={() => {
                    setConfirmDeleteId({id: el._id, name: el.title})
                    setOpenConfirmDelete(true)
                }}>
                <img src={logoDelete} alt='delete' />
            </button>
            {openConfirmDelete && <ModalDeleteCategoryContainer userId={userId} nameCategory={confirmDeleteId.name} categoryId={confirmDeleteId.id} onClose={() => setOpenConfirmDelete(false)} />}
        </div>
    })
    return (
        <nav className={style.nav}>
            <div ref={ref}>
                <div className={style.item + ' ' + style.name}>
                    <img className={style.nav_img + ' ' + style.name_img} src={logoAvatar} alt='avatar' />
                    <p className={style.name_text}>{firstName}</p>
                </div>
                <div className={style.item}>
                    <div className={style.today}>
                        <img className={style.nav_img + ' ' + style.today_img} src={logoToday} alt='icon' />
                        <span className={style.today_num}>{moment().format('D')}</span>
                    </div>
                    <NavLink to="/day" className={({ isActive }) => isActive ? style.item_a_active : style.item_a_inactive}>ToDo</NavLink>
                </div>
                <NavItem logo={logoWeek} link={'/week'} title={'Week'} onClick={() => console.log('click')} />
                <NavItem logo={logoTasks} link={'/tasks'} title={'All tasks'} onClick={() => console.log('click')} />
                <NavItem logo={logoTasks} link={'/calendar'} title={'Calendar'} onClick={() => console.log('click')} />
                <div className={style.categories_title}>
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
            </div>
            <div className={style.categories} style={{ maxHeight: height + 'px' }}>
                {showCategory && categoryItem}
            </div>
            <button className={style.logout} onClick={logout}>log out</button>
        </nav>
    )
}

export default Navbar;