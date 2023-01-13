import React from "react";
import { Formik } from "formik";
import style from "./formAddTask.module.scss"
import { useState } from "react";
import moment from "moment";
import ModalReminderContainer from "../../modal/modalReminder/ModalReminderContainer";
import ModalListContainer from "../../modal/modalList/ModalListContainer";

const FormAddTaks = ({ addTask, userId }) => {
    const [openInfo, setOpenInfo] = useState(false)
    const [openReminder, setOpenReminder] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [temporaryDate, setTemporaryDate] = useState(null);
    const [temporaryTime, setTemporaryTime] = useState(null);
    const [temporaryTaskCategory, setTemporaryTaskCategory] = useState(null)

    const handleFocus = () => {
        setOpenInfo(true)
    }

    return (
        <>
            <div className={style.setting}>
                <div className={style.setting_wrp + ' ' + (openInfo && style.setting_wrp_visible)}>
                    <div className={style.setting_block}>
                        <button
                        onClick={() => {
                            setOpenReminder(true)
                            setOpenInfo(false)
                        }}
                            className={style.setting_block_btn}>
                                {temporaryDate && moment(temporaryDate).format('DD.MM.YYYY') + ' '}  
                                {/* {temporaryTime && moment(temporaryTime.format('LT')) */}
                                {temporaryTime && moment(temporaryTime).format('HH:mm')}
                                {!temporaryDate && !temporaryTime && 'Remind'}
                                {/* {temporaryDate || temporaryTime ? moment(temporaryDate).format('DD.MM.YYYY') + ' ' + moment(temporaryTime, 'LT') : 'Remind'} */}
                            </button>
                        <ModalReminderContainer isOpen={openReminder} taskId={null} date={temporaryDate} time={temporaryTime} setTemporaryDate={setTemporaryDate} setTemporaryTime={setTemporaryTime} onClose={() => setOpenReminder(false)} />

                    </div>
                    <div className={style.setting_block}>
                        <button
                            onClick={() => {
                                setOpenCategory(true)
                                setOpenInfo(false)
                            }}
                            className={style.setting_block_btn}>
                                {temporaryTaskCategory ? temporaryTaskCategory : 'Choose category'}
                            </button>
                        <ModalListContainer isOpen={openCategory} taskId={null} taskCategory={temporaryTaskCategory} setTemporaryTaskCategory={setTemporaryTaskCategory} onClose={() => setOpenCategory(false)} />

                    </div>
                </div>
            </div>
            <Formik
                initialValues={{ task: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.task) {
                        errors.task = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {resetForm}) => {
                    setOpenInfo(false)
                    addTask(userId, values.task, temporaryDate, temporaryTime, temporaryTaskCategory)
                    resetForm()
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (

                    <form
                        className={style.form}
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="Введите заметку"
                            className={style.form_input}
                            type="text"
                            name="task"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            autoComplete='off'
                            value={values.task}
                        />
                        <button className={style.form_btn} type="submit">

                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormAddTaks;