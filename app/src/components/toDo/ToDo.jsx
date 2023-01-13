import React from "react";
import FormAddContainer from "../form/formAddTask/FormAddContainer";
import style from "./toDo.module.scss"
import TaskBlock from "./TaskBlock";

const ToDo = (props) => {
    const categoryBlock = props.categories.map(el => {
        return <TaskBlock key={el._id} titleBlock={el.title} titleCategory={el.title} tasks={props.tasks} meanSort={props.meanSort} props={props} />
    })

    const dateBlock = props.dateBlock.map(el => {
        return <TaskBlock key={el._id} titleBlock={el} titleCategory={el} tasks={props.tasks} meanSort={props.meanSort} props={props} />
    })

    const onChange = () => {
        if (props.meanSort === 'List') {
            props.changeMeanSort('Time')
        } else if (props.meanSort === 'Time') {
            props.changeMeanSort('List')
        }
    }

    return (
        <div className={style.wrp}>
            <div className={style.wrp_extra}>
            <div className={style.header}>
                <h2 className={style.header_title}>All tasks</h2>
                <div className={style.header_sort}>
                    <p className={style.header_sort_text}>Sort by</p>
                    <button
                        onClick={onChange}
                        className={style.header_sort_btn}>{props.meanSort}</button>
                </div>
            </div>
            <div className={style.todo}>
                <div>
                    <TaskBlock titleBlock={'Common'} titleCategory={null} tasks={props.tasks} meanSort={props.meanSort} props={props} />
                    {props.meanSort === 'List' && categoryBlock }
                    {props.meanSort === 'Time' && dateBlock}
                </div>
            </div>
            </div>
            <div className={style.footer}>

                <FormAddContainer />

            </div>
        </div>

    )
}

export default ToDo;