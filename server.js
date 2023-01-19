import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import auth from "./routes/auth.route.js";
import task from "./routes/task.route.js";
import subtask from "./routes/subtask.route.js";
import category from "./routes/category.route.js";
import config from 'config';

const app = express();
const PORT = config.get('port') || 3001;
const db = config.get('mongoUri');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected db'))
    .catch(error => console.log(error))

app.use(cors());
app.use(express.json());

app.use('/api/auth',cors(), auth);
app.use('/api/task', cors(), task);
app.use('/api/subtask', cors(), subtask);
app.use('/api/category', cors(), category);

app.listen(PORT, error => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
