import React, { useEffect } from "react";
import { Formik } from "formik";
import moment from "moment";
import style from "./formWithDate.module.scss";
import { useState } from "react";


const ChoiceDate = ({ date, taskId, choiceDate, }) => {
    const [initDate, setInitDate] = useState(undefined)
    useEffect(() => {
        if (date) {
            setInitDate(moment(date).format('DD.MM.YYYY'))
        } else {
            setInitDate(moment().format('DD.MM.YYYY'))
        }
    }, [date]);
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{ date: initDate }}
                validate={values => {

                    const errors = {};

                    if (!values.date) {
                        errors.date = 'Required';
                    }
                    return errors;
                }}
                onSubmit={values => {

                    choiceDate(taskId, moment(values))
                    // console.log(values)
                    // props.addTask(values.task)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form
                        className={style.form}
                        onSubmit={handleSubmit}>
                        <input
                            value={values.date}
                            className={style.form_input}
                            type="text"
                            name="date"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {errors.task && touched.task && errors.task}
                        {/* <button className={style.form_btn} type="submit">
                            send
                        </button> */}
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ChoiceDate;