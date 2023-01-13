import React from "react";
import FormAddContainer from "../../form/formAddTask/FormAddContainer";
import TaskBlock from "../TaskBlock";
import style from './../toDo.module.scss';

const ToDoDay = (props) => {

    return (<div className={style.wrp}>
        <TaskBlock titleBlock={'My day'} titleCategory={'Today'} tasks={props.tasks} meanSort={'Time'} props={props} />
        <div className={style.footer}>

            <FormAddContainer />

        </div>

    </div>)
}

export default ToDoDay