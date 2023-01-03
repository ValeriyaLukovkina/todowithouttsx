import React, { useEffect } from "react";
import { Formik } from "formik";
import moment from "moment";
import style from "./formWithDate.module.scss";
import { useState } from "react";


const ChoiceDate = ({ date, taskId, setTaskDate, setTemporaryDate}) => {
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
                    if (taskId) {
                        setTaskDate(taskId, moment(values))
                    } else  {
                        setTemporaryDate(moment(values))
                    }
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
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ChoiceDate;