import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const tasksAPI = {
    getAllTasks() {
        debugger
        return instance.get('tasks')
            .then(response => response.data)
    },
    updateNameTask(taskId, name) {
        debugger
        return instance.put('tasks', {
            taskId: taskId,
            name: name
        })
        .then(response => response.data)

    }
}