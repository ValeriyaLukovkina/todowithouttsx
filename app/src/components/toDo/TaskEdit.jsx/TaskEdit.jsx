import React from "react";
import { Formik } from "formik";
import style from "./taskEdit.module.scss";
import logoBell from './../../../assests/svg/Bell.svg';
import logoCheck from './../../../assests/svg/Check.svg';
import logoFolder from './../../../assests/svg/Folder.svg';
import logoAim from './../../../assests/svg/Aim.svg';
import logoCross from './../../../assests/svg/Cross.svg';


const TaskEdit = (props) => {
    return (
        <>
            <div className={style.wrp}>
                <div className={style.header}>
                    <div className={style.header_title}>
                        <img className={style.svg} src={logoAim} alt='checked' />
                        <p>{props.task}</p>
                    </div>
                    <div className={style.header_block}>
                        <button
                            className={style.header_block_btn}
                            onClick={props.complete
                                ? () => props.isComplete(props.id, false)
                                : () => props.isComplete(props.id, true)}
                        >
                            <img className={style.svg} src={logoCheck} alt='checked' />
                        </button>
                        <button className={style.header_block_btn}>
                            <img className={style.svg} src={logoCross} alt='cross' />
                        </button>
                    </div>
                </div>
                {/* <div className={style.wrp}> */}
                    <div>
                        <h3>{props.task}</h3>
                    </div>
                    <div className={style.buttons}>
                        <button className={style.buttons_block}>
                            <img className={style.buttons_img} src={logoBell} alt='bell' />
                            <p>Remind</p>
                        </button>
                        <button className={style.buttons_block}>
                            <img className={style.buttons_img} src={logoFolder} alt='folder' />
                            <p>{props.category}</p>
                        </button>
                    </div>
                    <div>
                        <h4>Notes</h4>
                        <p>qwertyuio</p>
                    </div>
                    <div>
                        <h4>Subtasks</h4>
                        <button></button>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default TaskEdit;