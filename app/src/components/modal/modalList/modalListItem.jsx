import React from "react";
import style from "./modalList.module.scss"

const ModalListItem = ({ tasks, taskId, name, category, changeTaskCategory, onClose }) => {

    // const chooseCategory = tasks.filter(el => el.id === taskId)[0].category
    // const [chooseCategory, setChooseCategory] = useState()
    const onChange = () => {
        changeTaskCategory(taskId, name);
        onClose()
    }
    return (
        <div className={style.modalList_item}>
            <button
                onClick={onChange}
                className={`${style.modalList_item_btn} ${category !== name && style.modalList_item_btn_add} `}
            >
                {name}
            </button>
            {category === name && <div className={style.modalList_item_choose}></div>}
        </div>
    )
}

export default ModalListItem