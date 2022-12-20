import React, { useState } from "react";
import FormAddContainer from "../Form/FormAddTask/FormAddContainer";
import TaskEdit from "./TaskEdit.jsx/TaskEdit";
// import FormEdit from "./FormEdit.jsx/FormAdd";
// import FormAdd from "../FormAdd/FormAdd";
import Task from "./Task";
import style from "./ToDo.module.scss"
// import { updateObjectInArray } from "../../utils/object-helpers";
import { sort } from "../../utils/sort-helper";

const ToDo = (props) => {

    const taskWork = sort(props.tasks, 'work', 'category', Task, props);
    const taskPersonal = sort(props.tasks, 'personal', 'category', Task, props);

    // const task = props.tasks.map((elem) => {
    //     return <Task category={elem.category} isComplete={props.isComplete} deleteTask={props.deleteTask} key={elem.id} id={elem.id} task={elem.task} complete={elem.complete}/>
    // })
    return (
        <div className={style.wrp}>
                {/* <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button> */}
    {/* </div> */}
            <h2 className={style.title}>All tasks</h2>
            <div className={style.todo}>
                <div>
                    <div>
                        <h3>Work</h3>
                        {taskWork}
                    </div>
                    <div>
                        <h3>Personal</h3>
                        {taskPersonal}
                    </div>
                </div>
                {/* <h3 className={style.todo_category}>work</h3> */}
                <div className={style.footer}>
                    <FormAddContainer />

                </div>
            </div>
            {/* <div className={style.todo + ' ' + style.todo_one}>
                <TaskEdit category={'category'} task={'name'}/>
            </div> */}
        </div>

    )
}

export default ToDo;