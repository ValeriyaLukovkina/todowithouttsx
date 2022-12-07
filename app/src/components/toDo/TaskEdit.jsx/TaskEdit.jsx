import React from "react";
import { Formik } from "formik";
import style from "./TaskEdit.module.scss";
import logoBell from './../../../assests/svg/Bell.svg';
import logoCheck from './../../../assests/svg/Check.svg';
import logoFolder from './../../../assests/svg/Folder.svg';
import logoAim from './../../../assests/svg/Aim.svg';
import logoCross from './../../../assests/svg/Cross.svg';


const TaskEdit = (props) => {
    return (
        <>
            <div>
                <div className={style.header}>
                    <div className={style.header_title}>
                        <img className={style.svg} src={logoAim} alt='checked' />
                        <p>{props.task}</p>
                    </div>
                    <div className={style.header_block}>
                        <button className={style.header_block_btn}>
                            <img className={style.svg} src={logoCheck} alt='checked' />
                        </button>
                        <button className={style.header_block_btn}>
                            <img className={style.svg} src={logoCross} alt='cross' />
                        </button>
                    </div>
                </div>

                <div>
                    <h3>{props.task}</h3>
                </div>
                <div>
                    <div>
                        <img src={logoBell} alt='bell' />
                        <p>Remind</p>
                    </div>
                    <div>
                        <img src={logoFolder} alt='folder' />
                        <p>{props.category}</p>
                    </div>
                </div>
                <div>
                    <h4>Notes</h4>
                    <p>qwertyuio</p>
                </div>
                <div>
                    <h4>Subtasks</h4>
                    <p>qwertyuio</p>
                </div>
            </div>
        </>
    )
}

export default TaskEdit;