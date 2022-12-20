import React from "react";
import { Formik } from "formik";
import moment from "moment";
import style from "./formWithDate.module.scss";
import { useState } from "react";
import { useEffect } from "react";


const ChoiceTime = ({ choiceTime, taskId, time }) => {
    const [showChoiceTime, setShowChoiceTime] = useState(false);
    const listTimeArr = [];
    for (let i = moment('00:00', 'LT'); i < moment('23:59', 'LT'); i.add(15, 'm')) {
        listTimeArr.push(i.format('LT'))
    }
    const listTime = listTimeArr.map(el => {

        return (
            <div key={el} className={style.time_item}>
                <button
                    onClick={() => choiceTime(taskId, moment(`${el}`, 'LT'))}
                    className={style.time_item_btn}>{el}</button>
            </div>
        )
    })


    const [initTime, setInitTime] = useState(undefined)
    useEffect(() => {

        if (time) {
            setInitTime(moment(time).format('LT'))
        } else {
            setInitTime(moment().format('LT'))
        }
    }, [time]);

    const handleFocus = () => {
        setShowChoiceTime(true)
    }
    const handleBlur = () => {
        setShowChoiceTime(false)
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{ time: initTime }}
                validate={values => {
                    const errors = {};
                    if (!values.time) {
                        errors.time = 'Required';
                    }
                    return errors;
                }}
                onSubmit={values => {
                    choiceTime(taskId, moment(`${values}`, 'LT'))
                }}
                onFocus={values => {
                    choiceTime(taskId, moment(`${values}`, 'LT'))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    // handleBlur,
                    handleSubmit,

                }) => (
                    <div className={style.wrp}>
                        <form
                            className={style.form}
                            onSubmit={handleSubmit}>
                            <input
                                onFocus={handleFocus}
                                value={values.time}
                                className={style.form_input}
                                type="text"
                                name="time"
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {/* {errors.task && touched.task && errors.task} */}
                            {/* <button className={style.form_btn} type="submit">
                            send
                        </button> */}
                        </form>
                        <div className={`${showChoiceTime && style.time_visible} ${style.time}`}>
                            {listTime}
                        </div>
                        {/* <button onClick={() => setShowChoiceTime(!showChoiceTime)}>ff</button> */}
                    </div>
                )}
            </Formik>
            {/* <div className={style.listTime}>
                {listTime}
            </div> */}
        </>
    )
}

export default ChoiceTime;