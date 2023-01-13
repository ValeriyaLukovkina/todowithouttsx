import { Router } from "express";
import { Tasks } from "../models/tasks.js";

const router = Router();

router.post('/add', async (req, res) => {
    try {
        const { taskId, nameSubtask } = req.body;
        await Tasks.findByIdAndUpdate(taskId, { $push: { subtask: {nameSubtask, complete: false} } });
        const task = await Tasks.findById(taskId)
        console.log(task)
        if (!task) {
            return res.json({ message: 'Задание не найдено' })
        }
        const subtask = task.subtask[task.subtask.length - 1]
        res.status(201).json({ resultCode: 0, subtask })

    } catch (error) {
        console.log(error)
    }
})

router.post('/isComplete', async (req, res) => {
    try {
        const { taskId, subtaskId, boolean } = req.body;
        const task = await Tasks.findOneAndUpdate(
            { id: taskId, "subtask._id": subtaskId },
            { $set: { "subtask.$.complete": boolean } }
        )
        const subtask = task.subtask.filter(el => el.id === subtaskId)
        console.log(task.subtask.some(sub => sub.complete=== false))
        if (!subtask) {
            return res.json({ resultCode: 1 })
        }
        res.status(201).json({ resultCode: 0, subtask })

    } catch (error) {
        console.log(error)
    }
})

router.post('/changename', async (req, res) => {
    try {
        const { taskId, subtaskId, nameSubtask } = req.body;
        const task = await Tasks.updateOne(
            { id: taskId, "subtask._id": subtaskId },
            { $set: { "subtask.$.nameSubtask": nameSubtask } }
        )
        if (!task.acknowledged) {
            return res.json({ resultCode: 1, message: 'Subtask is not found' })
        }
        res.status(201).json({ resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.post('/isallcomplete', async (req, res) => {
    try {
        const { taskId, boolean } = req.body;
        const task = await Tasks.findOneAndUpdate(
            { id: taskId },
            { $set: { "subtask.$[].complete" : boolean } }
        )
        // console.log(task)
        // if (!task.acknowledged) {
        //     return res.json({ resultCode: 1, message: 'Subtask is not found' })
        // }
        res.status(201).json({ resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})


export default router;