import React from "react";
import * as ReactDOM from 'react-dom';
import style from "./modalReminder.module.scss";
import styleModal from "./../modal.module.scss";
import ButtonClose from "../../buttons/buttonClose/ButtonClose";
import ModalCalendarContainer from "./modalCalendar/ModalCalendarContainer";
import moment from "moment";

const ModalReminder = ({ isOpen, onClose, date, taskId, time, setTemporaryDate, setTemporaryTime, setTemporaryTaskCategory }) => {
    if (!isOpen) {
        return null
    }

    const close = () => {
        if (!date) {
            setTemporaryDate(moment())
        }
        onClose()
    }

    return ReactDOM.createPortal(
        <div className={styleModal.modal}>
            <div className={styleModal.modal_bgc} onClick={close}></div>
            <div className={style.modalReminder}>
                <div className={style.modalReminder_title}>
                    <ButtonClose onClose={close} />
                </div>
                <div>
                    <ModalCalendarContainer date={date} taskId={taskId} time={time} setTemporaryDate={setTemporaryDate} setTemporaryTime={setTemporaryTime} setTemporaryTaskCategory={setTemporaryTaskCategory} />
                </div>
                <div className={style.modalReminder_footer}>
                    <button
                        onClick={close}
                        className={style.modalReminder_footer_btn}>
                        Cancel
                    </button>
                    <span className={style.modalReminder_footer_line}></span>
                    <button
                        onClick={close}
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