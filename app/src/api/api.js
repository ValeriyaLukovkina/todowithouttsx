import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

export const authAPI = {
    login(email, password) {
        return instance.post('auth/login', { email, password })
            .then(response => response.data);
    },
    registration(firstName, lastName, email, password) {
        return instance.post('auth/registration', {firstName, lastName, email, password })
            .then(response => response.data);
    }
}

export const tasksAPI = {
    getAllTasks(userId) {
        return instance.get(`task/get/${userId}`)
            .then(response => response.data)
    },
    addTask( userId, nameTask, date, time, category ) {
        return instance.post('task/add', {
            userId,
            nameTask,
            date,
            time,
            category
        })
        .then(response => response.data)
    },
    changeTaskName( taskId, nameTask ) {
        return instance.post('task/changename', {
            taskId,
            nameTask,
        })
        .then(response => response.data)
    },
    changeTaskCategory( taskId, category ) {
        return instance.post('task/changecategory', {
            taskId,
            category,
        })
        .then(response => response.data)
    },
    changeAllTaskCategory( userId, previousCategory, nextCategory ) {
        return instance.post('task/changeallcategory', {
            userId, 
            previousCategory, 
            nextCategory
        })
        .then(response => response.data)
    },
    isTaskComplete( taskId, boolean ) {
        return instance.post('task/iscomplete', {
            taskId,
            boolean,
        })
        .then(response => response.data)
    },
    setTaskDate( taskId, date ) {
        return instance.post('task/setdate', {
            taskId,
            date,
        })
        .then(response => response.data)
    },
    setTaskTime( taskId, time ) {
        return instance.post('task/settime', {
            taskId,
            time,
        })
        .then(response => response.data)
    },
    deleteTask(taskId) {
        return instance.delete(`task/delete/${taskId}`)
        .then(response => response.data) 
    },
    deleteTaskCurrentCategory(userId, category) {
        return instance.delete(`task/deletecurrentcategory/${userId}/${category}`)
        .then(response => response.data) 
    }
}

export const subtasksAPI = {
    addSubtask( taskId, nameSubtask ) {
        return instance.post('subtask/add', {
            taskId,
            nameSubtask,
        })
        .then(response => response.data)
    },
    isSubtaskComplete( taskId, subtaskId, boolean) {
        return instance.post('subtask/isComplete', {
            taskId, 
            subtaskId, 
            boolean
        })
        .then(response => response.data)
        .catch(error => ({message: error.message}))
    },
    isAllSubtaskComplete(taskId, boolean) {

        return instance.post('subtask/isallcomplete', {
            taskId, 
            boolean, 
        })
        .then(response => response.data)
    },
    changeSubtaskName(taskId, subtaskId, nameSubtask) {
        return instance.post('subtask/changename', {
            taskId, 
            subtaskId, 
            nameSubtask
        })
        .then(response => response.data)
    },
}

export const categoryAPI = {
    addCategory(userId, categoryName) {
        return instance.post('category/add', { userId, categoryName })
            .then(response => response.data);
    },
    deleteCategory(userId, categoryId) {
        return instance.delete(`category/delete/${userId}/${categoryId}`)
            .then(response => response.data);
    },
}