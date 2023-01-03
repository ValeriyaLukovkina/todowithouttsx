import React from "react";
import FormAddContainer from "../../Form/FormAddTask/FormAddContainer";
import TaskBlock from "../TaskBlock";
import style from './../ToDo.module.scss';

const ToDoDay = (props) => {
    debugger
    return (<div className={style.wrp}>
        <TaskBlock titleBlock={'My day'} titleCategory={'Today'} tasks={props.tasks} meanSort={'Time'} props={props} />
        <div className={style.footer}>

            <FormAddContainer />

        </div>

    </div>)
}

export default ToDoDay