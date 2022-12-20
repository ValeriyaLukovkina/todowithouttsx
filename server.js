import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bp from "body-parser";
import { Tasks } from "./models/tasks.js";

const app = express();
const PORT = 3001;
const db = 'mongodb+srv://Valeriya:qwerty123@cluster0.ixnbtnk.mongodb.net/ToDo?retryWrites=true&w=majority';

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected db'))
    .catch(error => console.log(error))

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/tasks', cors(), (req, res) => {
    Tasks
        .clone()
        .find({})
        .then(tasks => {
            return res.send({tasks, resultCode: 0})
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка');
        })
})

app.put('/tasks', cors(), (req, res) => {
    const {taskId, name} = req.body;

    Tasks
        .updateOne(
            {id: taskId}, 
            {$set: {task: name}})
        .then(() => {
            return res.send({ resultCode: 0})
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка');
        })
})


app.listen(PORT, error => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
