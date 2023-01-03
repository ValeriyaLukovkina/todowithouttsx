import React, { useEffect, useState } from "react";
import { filterGroup, sortByDate, sortByList } from "../../utils/sort-helper";
import Task from "./Task";
import style from "./ToDo.module.scss"

const TaskBlock = ({ titleBlock, titleCategory, tasks, meanSort, props }) => {
    const [showTaskGroup, setShowTaskGroup] = useState(true);
    const taskGroupList = sortByList(tasks, titleCategory, 'category', Task, props);
    const taskGroupDate = sortByDate(tasks, titleCategory, 'date', Task, props);
    const [taskGroupListFilter, setTaskGroupListFilter] = useState(undefined)
    useEffect(() => {
        debugger
        if (taskGroupList) {
            setTaskGroupListFilter(filterGroup(taskGroupList))
        }
    }, [tasks, taskGroupList ])

    const [taskGroupDateFilter, setTaskGroupDateFilter] = useState(undefined)
    useEffect(() => {
        if (taskGroupDate) {
            setTaskGroupDateFilter(filterGroup(taskGroupDate))
        }
    }, [tasks, taskGroupDate])

    return (
        <div className={style.task_block}>
            <div className={style.task_block_title} onClick={() => setShowTaskGroup(!showTaskGroup)}>
                <h3 className={style.task_block_title_text}>{titleBlock}</h3>
                <div className={style.task_block_title_span + ' ' + (!showTaskGroup && style.task_block_title_span_visible)}>
                    <span>
                        {meanSort === 'List' && taskGroupList.filter(el => el).length}
                        {meanSort === 'Time' && taskGroupDate.filter(el => el).length}
                    </span>
                </div>

            </div>
            {showTaskGroup && meanSort === 'List' && taskGroupListFilter}
            {showTaskGroup && meanSort === 'Time' && taskGroupDateFilter}
        </div>
    )
}

export default TaskBlock;