import React from "react";
import { Formik } from "formik";
import style from "./FormAddTask.module.scss"
import { useState } from "react";
import ModalReminderContainer from "../../modal/modalReminder/modalReminderContainer";
import ModalListContainer from "../../modal/modalList/modalListContainer";
import moment from "moment";

const FormAddTaks = ({ addTask, userId }) => {
    const [openInfo, setOpenInfo] = useState(true)
    const [openReminder, setOpenReminder] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [temporaryDate, setTemporaryDate] = useState(null);
    const [temporaryTime, setTemporaryTime] = useState(null);
    const [temporaryTaskCategory, setTemporaryTaskCategory] = useState(null)


    const handleBlur = () => {
        setOpenInfo(false)
    }

    const handleFocus = () => {
        setOpenInfo(true)
    }

    return (
        <>
            <div className={style.setting}>
                <div className={style.setting_wrp + ' ' + (openInfo && style.setting_wrp_visible)}>
                    <div className={style.setting_block}>
                        <button
                            onClick={() => setOpenReminder(true)}
                            className={style.setting_block_btn}>
                                {temporaryDate && moment(temporaryDate).format('DD.MM.YYYY') + ' '}  
                                {/* {temporaryTime && moment(temporaryTime.format('LT')) */}
                                {temporaryTime && moment(temporaryTime).format('HH:mm')}
                                {!temporaryDate && !temporaryTime && 'Remind'}
                                {/* {temporaryDate || temporaryTime ? moment(temporaryDate).format('DD.MM.YYYY') + ' ' + moment(temporaryTime, 'LT') : 'Remind'} */}
                            </button>
                        <ModalReminderContainer taskId={null} date={temporaryDate} time={temporaryTime} setTemporaryDate={setTemporaryDate} setTemporaryTime={setTemporaryTime} isOpen={openReminder} onClose={() => setOpenReminder(false)} />

                    </div>
                    <div className={style.setting_block}>
                        <button
                            onClick={() => setOpenCategory(true)}
                            className={style.setting_block_btn}>
                                {temporaryTaskCategory ? temporaryTaskCategory : 'Choose category'}
                            </button>
                        <ModalListContainer isOpen={openCategory} taskId={null} taskCategory={temporaryTaskCategory} setTemporaryTaskCategory={setTemporaryTaskCategory} onClose={() => setOpenCategory(false)} />

                    </div>
                </div>
            </div>
            <Formik
                initialValues={{ task: 'Введите заметку' }}
                validate={values => {
                    const errors = {};
                    if (!values.task) {
                        errors.task = 'Required';
                    }
                    return errors;
                }}
                onSubmit={values => {
                    addTask(userId, values.task, temporaryDate, temporaryTime, temporaryTaskCategory)
                }}
            // handleFocus={values => {
            //     setOpenInfo(true)
            // }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    // handleBlur,
                    handleSubmit,
                    // handleFocus
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
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        {/* {errors.task && touched.task && errors.task} */}
                        <button className={style.form_btn} type="submit">

                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormAddTaks;