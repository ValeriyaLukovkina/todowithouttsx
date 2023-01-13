import React from "react";
import { Formik } from "formik";
import style from "./formAddCategory.module.scss"

const FormAddCategory = ({ onClose, addCategory, userId }) => {

    return (
        <>
            <Formik
                initialValues={{ category: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.category) {
                        errors.category = 'Required';
                    }
                    return errors;
                }}
                onSubmit={values => {
                    addCategory(userId, values.category);
                    onClose()
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleFocus
                }) => (

                    <form
                        className={style.formCategory}
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit()
                            }
                        }}
                        >
                        <input
                            placeholder={"Введите название"}
                            className={style.formCategory_input + ' ' + (touched.category && errors.category && style.formCategory_input_error)}
                            type="text"
                            name="category"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            autoComplete="off"
                        />
                        <div className={style.formCategory_footer}>
                            <button
                                onClick={onClose}
                                className={style.formCategory_footer_btn}>
                                Cancel
                            </button>
                            <span className={style.formCategory_footer_line}></span>
                            <button
                                type="submit"
                                className={style.formCategory_footer_btn}>
                                Set
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormAddCategory;