import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, { collection: 'Tasks' });

export const Tasks = mongoose.model('Tasks', tasksSchema)
    .find({}, { _id: 0 })
    .sort({ date: 1 })