import React from "react";
import { useParams } from "react-router-dom";
import FormAddContainer from "../../form/formAddTask/FormAddContainer";
import TaskBlock from "../TaskBlock";
import style from './../toDo.module.scss';

const ToDoCategory = (props) => {

    const { name } = useParams();

    return (<div className={style.wrp}>
        <TaskBlock titleBlock={name} titleCategory={name} tasks={props.tasks} meanSort={'List'} props={props} />
        <div className={style.footer}>
            <FormAddContainer />
        </div>

    </div>)
}

export default ToDoCategory