import React from "react";
import { Formik } from "formik";
import style from "./FormAddSubtask.module.scss"

const Form = ({nameForm, initVal, handleBlur}) => {
    return (
<Formik
enableReinitialize
initialValues={{task: initVal, subtask: initVal }}
validate={values => {
    const errors = {};
    if (!values.subtask) {
        errors.subtask = 'Required';
    } else if (!values.task) {
        errors.task = 'Required';
    }
    return errors;
}}
onSubmit={values => {}}
>
{({
    values,
    errors,
    touched,
    handleChange,
    // handleBlur,
    handleSubmit,
}) => (
    <form
        className={nameForm === 'task' ? style.form_task : style.form_subtask}
        onSubmit={handleSubmit}>
        <input
            value={nameForm === 'task' ? values.task : values.subtask}
            autoFocus
            // placeholder="Введите заметку"
            className={nameForm === 'task' ? style.form_task_input : style.form_subtask_input}
            type="text"
            name={nameForm}
            onChange={handleChange}
            onBlur={() => handleBlur(values[nameForm])}

        />
        {/* {errors.task && touched.task && errors.task} */}
        {/* <button className={style.form_btn} type="submit">
            
        </button> */}
    </form>
)}
</Formik>
    )
}

export default Form;