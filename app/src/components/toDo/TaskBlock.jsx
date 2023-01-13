import React, { useEffect, useState } from "react";
import { filterGroup, sortByDate, sortByList } from "../../utils/sort-helper";
import Task from "./Task";
import style from "./toDo.module.scss"

const TaskBlock = ({ titleBlock, titleCategory, tasks, meanSort, props }) => {
    const [showTaskGroup, setShowTaskGroup] = useState(true);
    const [taskGroupList, setTaskGroupList] = useState(null);
    const [taskGroupDate, setTaskGroupDate] = useState(null);
    useEffect(() => {
        setTaskGroupList(sortByList(tasks, titleCategory, 'category', Task, props));
        setTaskGroupDate(sortByDate(tasks, titleCategory, 'date', Task, props));
    }, [tasks, titleCategory, props])

    const [taskGroupListFilter, setTaskGroupListFilter] = useState(undefined)
    useEffect(() => {
        setTaskGroupListFilter(filterGroup(taskGroupList))
    }, [taskGroupList])

    const [taskGroupDateFilter, setTaskGroupDateFilter] = useState(undefined)
    useEffect(() => {
        setTaskGroupDateFilter(filterGroup(taskGroupDate))
    }, [tasks, taskGroupDate])

    return (
        <div className={style.task_block}>
            <div className={style.task_block_title} onClick={() => setShowTaskGroup(!showTaskGroup)}>
                <h3 className={style.task_block_title_text}>{titleBlock}</h3>
                <div className={style.task_block_title_span + ' ' + (!showTaskGroup && style.task_block_title_span_visible)}>
                    <span>
                        {meanSort === 'List' && taskGroupList && taskGroupList.filter(el => el).length}
                        {meanSort === 'Time' && taskGroupDate && taskGroupDate.filter(el => el).length}
                    </span>
                </div>

            </div>
            {((showTaskGroup && meanSort === 'List' && taskGroupList && taskGroupList.filter(el => el).length === 0)
                || (showTaskGroup && meanSort === 'Time' && taskGroupDate && taskGroupDate.filter(el => el).length === 0))
                && <p className={style.text}>No such tasks</p>}
            {showTaskGroup && meanSort === 'List' && taskGroupListFilter}
            {showTaskGroup && meanSort === 'Time' && taskGroupDateFilter}
        </div>
    )
}

export default TaskBlock;