import React from "react";
import { Formik } from "formik";
import style from "./FormAdd.module.scss"


const FormAdd = (props) => {
    return (
        <>
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
                    props.addTask(values.task)
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
                        placeholder="Введите заметку"
                        className={style.form_input}
                            type="text"
                            name="task"
                            onChange={handleChange}
                            onBlur={handleBlur}

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

export default FormAdd;