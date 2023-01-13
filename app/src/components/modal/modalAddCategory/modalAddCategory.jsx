import React from "react";
import * as ReactDOM from 'react-dom';
import style from "./modalAddCategory.module.scss";
import styleModal from "./../modal.module.scss";
import FormAddCategoryContainer from "../../form/formAddCategory/FormAddCategoryContainer";

const ModalAddCategory = ({ onClose}) => {

    return ReactDOM.createPortal(
        <div className={styleModal.modal}>
            <div className={styleModal.modal_bgc} onClick={onClose}></div>
            <div className={style.modalCategory}>
                <h3 className={style.modalCategory_title}>
                    Create a list
                </h3>
                <FormAddCategoryContainer onClose={onClose}/>
            </div>
        </div>,
        document.body
    )
}

export default ModalAddCategory;