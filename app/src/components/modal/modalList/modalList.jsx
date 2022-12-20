import React from "react";
import * as ReactDOM from 'react-dom';
import style from "./modalList.module.scss";
import styleModal from "./../modal.module.scss";
import ModalListItem from "./modalListItem";
import ButtonClose from "../../buttons/buttonClose/buttonClose";

const modalList = ({ tasks, isOpen, onClose, categories, category, taskId, changeTaskCategory }) => {
    const categoriesItem = categories.map(el => {
        return <ModalListItem onClose={onClose} tasks={tasks} taskId={taskId} name={el.category} category={category} changeTaskCategory={changeTaskCategory} />
    })
    if (!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
        <div className={styleModal.modal}>
            <div className={styleModal.modal_bgc} onClick={onClose}></div>
            <div className={style.modalList}>
                <div className={style.modalList_title}>
                    <h3 className={style.modalList_title_txt}>Move to:</h3>
                    <ButtonClose onClose={onClose}/>
                </div>
                {categoriesItem}
            </div>
        </div>,
        document.body
    )
    // return (
    //     <div>{isOpen.toString()}</div>
    // )
}

export default modalList