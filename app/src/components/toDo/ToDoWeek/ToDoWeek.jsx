import React from "react";
import FormAddContainer from "../../Form/FormAddTask/FormAddContainer";
import TaskBlock from "../TaskBlock";
import style from './../ToDo.module.scss';

const ToDoWeek = (props) => {
    debugger
    return (<div className={style.wrp}>
        <TaskBlock titleBlock={'Next week'} titleCategory={'Week'} tasks={props.tasks} meanSort={'Time'} props={props} />
        <div className={style.footer}>

            <FormAddContainer />

        </div>

    </div>)
}

export default ToDoWeek