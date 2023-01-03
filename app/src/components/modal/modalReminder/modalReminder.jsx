import React from "react";
import * as ReactDOM from 'react-dom';
import style from "./modalReminder.module.scss";
import styleModal from "./../modal.module.scss";
import ButtonClose from "../../buttons/buttonClose/buttonClose";
import ModalCalendarContainer from "./modalCalendar/modalCalendarContainer";

const ModalReminder = ({ isOpen, onClose, date, taskId, time, setTemporaryDate, setTemporaryTime, setTemporaryTaskCategory }) => {
    if (!isOpen) {
        return null
    }
    return ReactDOM.createPortal(
        <div className={styleModal.modal}>
            <div className={styleModal.modal_bgc} onClick={onClose}></div>
            <div className={style.modalReminder}>
                <div className={style.modalReminder_title}>
                    <ButtonClose onClose={onClose} />
                </div>
                <div>
                    <ModalCalendarContainer date={date} taskId={taskId} time={time} setTemporaryDate={setTemporaryDate} setTemporaryTime={setTemporaryTime} setTemporaryTaskCategory={setTemporaryTaskCategory} />
                </div>
                <div className={style.modalReminder_footer}>
                    <button
                        onClick={onClose}
                        className={style.modalReminder_footer_btn}>
                        Cancel
                    </button>
                    <span className={style.modalReminder_footer_line}></span>
                    <button
                        onClick={onClose}
                        className={style.modalReminder_footer_btn}>
                        Set
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ModalReminder;