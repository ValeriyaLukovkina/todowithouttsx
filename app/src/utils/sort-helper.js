export let sort = (items, propName, objPropName, Component, props) => {
    return items.map((task) => {
        if (task[objPropName] === propName) {

            return <Component key={task.id} subtask={task.subtask} date={task.date} time={task.time} category={task.category} isSubtaskComplete={props.isSubtaskComplete} isTaskComplete={props.isTaskComplete} addSubtask={props.addSubtask} changeAllSubtask={props.changeAllSubtask} deleteTask={props.deleteTask} deleteSubtask={props.deleteSubtask} id={task.id} task={task.task} complete={task.complete} />
        }
    })
}