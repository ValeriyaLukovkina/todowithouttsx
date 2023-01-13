import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import moment from "moment";
import style from "./formWithDate.module.scss";


const ChoiceTime = ({ setTaskTime, taskId, time, date, setTemporaryTime, listTime }) => {
    const [showChoiceTime, setShowChoiceTime] = useState(false);
    const [newListTime, setNewListTime] = useState(listTime)

    useEffect(() => {
        if (!date || moment().isSame(date, 'day')) {
            const temporary = listTime.filter(el => {
                return moment().format('HH:mm') < el
            })
            setNewListTime(temporary)
        } else {
            setNewListTime(listTime)
        }     
    }, [date])

    const [initTime, setInitTime] = useState(undefined);
    useEffect(() => {

        if (time) {
            setInitTime(moment(time).format('HH:mm'))
        } else {
            setInitTime(moment().format('HH:mm'))
        }
    }, [time]);

    const listTimeEl = newListTime && newListTime.map(el => {

        return ( 
            <div key={el} className={style.time_item}>
                <button
                    onClick={() => {
                        if (taskId) {
                            setTaskTime(taskId, moment(`${el}`, 'HH:mm'))
                        } else {
                            setTemporaryTime(moment(`${el}`, 'HH:mm'))
                        }

                    }}
                    className={style.time_item_btn}>{el}</button>
            </div>
        )
    })

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
                    if (taskId) {
                        setTaskTime(taskId, moment(`${values}`, 'LT'))
                    } else {
                        setTemporaryTime(moment(`${values}`, 'LT'))
                    }
                }}
                onFocus={values => {
                    setTaskTime(taskId, moment(`${values}`, 'LT'))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
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
                        </form>
                        <div className={`${showChoiceTime && style.time_visible} ${style.time}`}>
                            {listTimeEl}
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default ChoiceTime;