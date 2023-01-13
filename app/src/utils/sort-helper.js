import moment from "moment"

export let sortByList = (items, propName, objPropName, Component, props) => {
    return items.map((task) => {
        if (task[objPropName] === propName) {
            return <Component
                key={task._id} subtask={task.subtask} date={task.date}
                time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
        }
    })
}

export let sortByDate = (items, propName, objPropName, Component, props, extra) => {
    const today = moment();
    const tomorrow = moment().add(1, 'day');
    const endSevenDay = moment().add(7, 'day');
    if (propName === 'Today') {
        return items.map((task) => {
            if (task[objPropName]) {
                if (moment(task[objPropName]).isSame(today, 'day')) {
                    return <Component
                        key={task._id} subtask={task.subtask} date={task.date}
                        time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                        isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                        deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                        nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
                }
            }
        })
    } else if (propName === 'Tomorrow') {
        return items.map((task) => {
            if (task[objPropName]) {
                if (moment(task[objPropName]).isSame(tomorrow, 'day')) {
                    return <Component
                        key={task._id} subtask={task.subtask} date={task.date}
                        time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                        isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                        deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                        nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
                }
            }
        })
    } else if (propName === 'Week') {
        return items.map((task) => {
            if (task[objPropName]) {
                if (moment(task[objPropName]).isAfter(today, 'day') && moment(task[objPropName]).isBefore(endSevenDay, 'day')) {
                    return <Component
                        key={task._id} subtask={task.subtask} date={task.date}
                        time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                        isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                        deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                        nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
                }
            }
        })
    } else if (propName === 'Upcoming') {
        return items.map((task) => {
            if (task[objPropName]) {
                if (moment(task[objPropName]).isAfter(endSevenDay, 'day')) {
                    return <Component
                        key={task._id} subtask={task.subtask} date={task.date}
                        time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                        isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                        deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                        nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
                }
            }
        })
    } else if (!propName) {
        return items.map((task) => {
            if (!task[objPropName] && !propName) {
                return <Component
                    key={task._id} subtask={task.subtask} date={task.date}
                    time={task.time} taskCategory={task.category} isSubtaskComplete={props.isSubtaskComplete}
                    isTaskComplete={props.isTaskComplete} addSubtaskPrevious={props.addSubtaskPrevious} isAllSubtaskComplete={props.isAllSubtaskComplete}
                    deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} taskId={task._id}
                    nameTask={task.nameTask} complete={task.complete} titleCategory={propName} />
            }
        })
    }

}

export let filterGroup = (group) => {
    if (!group) {
        return undefined
    }
    return group.filter(el => el).sort((a, b) => {
        if (a.props.complete) {
            return -1
        } else if (b.props.complete) {
            return 0
        } else if (a.props.time && b.props.time) {
            if (moment(a.props.time).isAfter(moment(b.props.time))) {
                return 1;
            }
            if (moment(a.props.time).isBefore(moment(b.props.time))) {
                return -1;
            }
            return 0;
        } else {
            if (a.props.date && b.props.date) {
                if (moment(a.props.date).isAfter(moment(b.props.date))) {
                    return 1;
                }
                if (moment(a.props.date).isBefore(moment(b.props.date))) {
                    return -1;
                }
                return 0;
            } else if (a.props.date && !b.props.date) {
                return -1
            } else if (b.props.date && !a.props.date) {
                return 1;
            }
        }
    })

}

export let sortByDateCalendar = (items, date) => {
    const itemGroup = items.map(task => {
        if (task['date']) {
            if (moment(task['date']).isSame(date, 'day')) {
                return task
            }
        }
    })
    return itemGroup.filter(task => task)
}