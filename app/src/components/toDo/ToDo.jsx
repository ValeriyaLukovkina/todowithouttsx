import React from "react";
import FormAddContainer from "../Form/FormAdd/FormAddContainer";
import TaskEdit from "./TaskEdit.jsx/TaskEdit";
// import FormEdit from "./FormEdit.jsx/FormAdd";
// import FormAdd from "../FormAdd/FormAdd";
import Task from "./Task";
import style from "./ToDo.module.scss"

const ToDo = (props) => {
    const task = props.tasks.map((elem) => {
        return <Task isComplete={props.isComplete} deleteTask={props.deleteTask} key={elem.id} id={elem.id} task={elem.task} complete={elem.complete} category={elem.category} />
    })
    return (
        <div className={style.wrp}>
            <div className={style.todo}>
                <div>
                    {task}
                </div>
                {/* <h3 className={style.todo_category}>work</h3> */}
                <div className={style.footer}>
                    <FormAddContainer />

                </div>
            </div>
            <div className={style.todo + ' ' + style.todo_one}>
                <TaskEdit category={'category'} task={'name'}/>
            </div>
        </div>

    )
}

export default ToDo;