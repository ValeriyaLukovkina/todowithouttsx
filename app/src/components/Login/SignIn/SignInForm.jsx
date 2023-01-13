import React from 'react';
import { Formik } from 'formik';
import style from "../login.module.scss"
import { NavLink } from 'react-router-dom';

const SignInForm = ({ login }) => {
  return (
    <>
      <div className={style.sign}>
        <h2 className={style.sign_title}>Sign in</h2>
        <div className={style.sign_link}>
          <p className={style.sign_link_text}>Don't have an account?</p>
          <NavLink
            className={style.sign_link_nav}
            to="/signup">
            Sign up
          </NavLink>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email || !values.password) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            login(values.email, values.password, setStatus)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={style.sign_form}
              onSubmit={handleSubmit}>
              <div className={style.sign_form_block}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={style.sign_form_block_input}
                />
                <span className={style.sign_form_block_span + ' ' + style.sign_form_block_span_focus + ' ' + (values.email && style.sign_form_block_span_active)}>Email</span>
              </div>
              {errors.email && touched.email && errors.email}
              <div className={style.sign_form_block}>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={style.sign_form_block_input}
                />
                <span className={style.sign_form_block_span + ' ' + style.sign_form_block_span_focus + ' ' + (values.password && style.sign_form_block_span_active)}>password</span>

              </div>
              {/* {errors.password && touched.password && errors.password} */}
              <div className={style.sign_form_block}>
                <button className={style.sign_form_block_btn} type="submit" disabled={isSubmitting}>
                  Continue
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  )
};

export default SignInForm;