import React from "react";
import style from "./modalList.module.scss"

const ModalListItem = ({ tasks, taskId, taskCategory, titleCategory, changeTaskCategory, onClose, setTemporaryTaskCategory }) => {
    const onChange = () => {
        if (taskId) {
            changeTaskCategory(taskId, titleCategory);
        } else {
            setTemporaryTaskCategory(titleCategory)
        }
        onClose()
    }
    return (
        <div className={style.modalList_item}>
            <button
                onClick={onChange}
                className={`${style.modalList_item_btn} ${titleCategory !== taskCategory && style.modalList_item_btn_add} `}
            >
                {titleCategory}
            </button>
            {titleCategory === taskCategory && <div className={style.modalList_item_choose}></div>}
        </div>
    )
}

export default ModalListItem