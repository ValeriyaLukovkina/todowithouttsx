import React from "react";
import { Formik } from "formik";
import style from "./FormAddCategory.module.scss"

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
            // handleFocus={values => {
            //     setOpenInfo(true)
            // }}
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
                        onSubmit={handleSubmit}>
                        <input
                            placeholder="Введите название"
                            className={style.formCategory_input}
                            type="text"
                            name="category"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
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