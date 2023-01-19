import { Router } from "express";
import { Tasks } from "../models/tasks.js";

const router = Router();

router.get('/get/:userId', async (req, res) => {
    try {
        const tasks = await Tasks.find({owner: req.params.userId});
        res.status(201).json({resultCode: 0, tasks })
    } catch (error) {
        console.log(error);
    }
})

router.post('/add', async (req, res) => {
    try {
        const {userId, nameTask, date, time, category} = req.body;
        const task = await new Tasks({
            owner: userId,
            nameTask,
            complete: false,
            date,
            time,
            category,
            subtask: [] 
        });
        await task.save()
        res.status(201).json({resultCode: 0, task })

    } catch (error) {
        console.log(error)
    }
})

router.post('/changename', async (req, res) => {
    try {
        const { taskId, nameTask } = req.body;
        const task = await Tasks.updateOne({id: taskId}, {$set: { nameTask }})
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.post('/changecategory', async (req, res) => {
    try {
        const { taskId, category  } = req.body;
        const task = await Tasks.updateOne({id: taskId}, {$set: { category }})
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.post('/changeallcategory', async (req, res) => {
    try {
        const { userId, previousCategory, nextCategory  } = req.body;
        const task = await Tasks.updateMany({owner: userId, category: previousCategory}, {$set: { category: nextCategory }})
        if(!task.acknowledged) {
            return res.json({ message: 'Error'})
        }
        res.status(201).json({ resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.post('/iscomplete', async (req, res) => {
    try {
        const {taskId, boolean } = req.body;
        const task = await Tasks.updateOne({_id: taskId}, {$set: { complete: boolean }})
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
    }
})

router.post('/setdate', async (req, res) => {
    try {
        const {taskId, date } = req.body;

        const task = await Tasks.updateOne({id: taskId}, {$set: { date }})
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.post('/settime', async (req, res) => {
    try {
        const {taskId, time } = req.body;
        const task = await Tasks.updateOne({id: taskId}, {$set: { time }})
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete/:taskId', async (req, res) => {
    try {
        const task = await Tasks.deleteOne({ id: req.params.taskId })
        if(!task.acknowledged) {
            return res.json({ message: 'Задание не найдено'})
        }
        res.status(201).json({resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

router.delete('/deletecurrentcategory/:userId/:category', async (req, res) => {
    try {
        const task = await Tasks.deleteMany({ owner: req.params.userId, category: req.params.category })
        if(!task.acknowledged) {
            return res.json({ message: 'Error'})
        }
        res.status(201).json({resultCode: 0, countDeletedTask: task.deletedCount })

    } catch (error) {
        console.log(error)
    }
})

export default router;