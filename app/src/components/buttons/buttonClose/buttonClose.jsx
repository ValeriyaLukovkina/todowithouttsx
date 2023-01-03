import React from "react";
import style from "./buttonClose.module.scss";

const ButtonClose = ({ onClose }) => {
    return (
        <button
            className={style.btn}
            onClick={onClose}
        ></button>
    )
}

export default ButtonClose;