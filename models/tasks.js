import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    nameTask: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
    },
    time: {
        type: Date,
    },
    category: {
        type: String,
    },
    owner: {
        type: Types.ObjectId, ref: 'User',
        required: true,
    },
    subtask: [
        {
            nameSubtask: {
                type: String,
                required: true,
            },
            complete: {
                type: Boolean,
                required: true,
            }
        }
    ]
}, { collection: 'Tasks' });

export const Tasks = mongoose.model('Tasks', tasksSchema)
    // .find({}, { _id: 0 })
    // .sort({ owner: 1 })