import React from "react";
import { useState } from "react";
import * as ReactDOM from 'react-dom';
import styleModal from "./../modal.module.scss";
import style from "./modalDeleteCategory.module.scss"

const ModalDeleteCategory = ({ onClose, userId, nameCategory, categoryId, deleteTaskCurrentCategory, changeAllTaskCategory }) => {
debugger
    const [isCheck, setIsCheck] = useState(true);

    const onClickDelete = (userId, nameCategory, categoryId) => {
        if (isCheck) {
            changeAllTaskCategory(userId, nameCategory, categoryId)
        } else if (!isCheck) {
            deleteTaskCurrentCategory(userId, nameCategory, categoryId)
        }
        onClose()
    }

    return ReactDOM.createPortal(
        <div className={styleModal.modal}>
            <div className={styleModal.modal_bgc} onClick={onClose}></div>
            <div className={style.modal}>
                <h4 className={style.modal_title}>Are you sure you want to delete category with all tasks?</h4>
                <div className={style.modal_block} onClick={() => setIsCheck(!isCheck)}>
                    <button
                        className={(isCheck ? style.modal_block_btn_complete : style.modal_block_btn_nocomplete) + ' ' + style.modal_block_btn}>
                        <span className={(isCheck && style.modal_block_btn_span_nocomplete) + ' ' + style.modal_block_btn_span}></span>
                    </button>
                    <p className={style.modal_block_text}>Delete category and transfer all tasks to common</p>
                </div>
                <div className={style.modal_footer}>
                    <button
                        onClick={() => onClickDelete(userId, nameCategory, categoryId)}
                        className={style.modal_btn + ' ' + style.modal_footer_btn}>
                        Yes
                    </button>
                    <span className={style.modal_footer_line}></span>
                    <button
                        type="submit"
                        className={style.modal_btn + ' ' + style.modal_footer_btn}
                        onClick={onClose}>
                        No
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ModalDeleteCategory;