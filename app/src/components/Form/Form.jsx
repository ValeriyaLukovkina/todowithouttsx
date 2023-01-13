import React from "react";
import { Formik } from "formik";
import style from "./formAddSubtask.module.scss"

const Form = ({ nameForm, initVal, handleBlur }) => {
    return (
        <Formik
            enableReinitialize
            initialValues={{ task: initVal, subtask: initVal }}
            validate={values => {
                const errors = {};
                if (!values.subtask) {
                    errors.subtask = 'Required';
                } else if (!values.task) {
                    errors.task = 'Required';
                }
                return errors;
            }}
            onSubmit={values => { }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            }) => (
                <form
                    className={nameForm === 'task' ? style.form_task : style.form_subtask}
                    onSubmit={handleSubmit}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleBlur(values[nameForm])
                        }
                    }}>
                    <input
                        value={nameForm === 'task' ? values.task : values.subtask}
                        autoFocus
                        className={nameForm === 'task' ? style.form_task_input : style.form_subtask_input}
                        type="text"
                        name={nameForm}
                        onChange={handleChange}
                        onBlur={() => handleBlur(values[nameForm])}

                    />
                </form>
            )}
        </Formik>
    )
}

export default Form;