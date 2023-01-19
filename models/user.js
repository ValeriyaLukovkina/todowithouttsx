import mongoose, {Types} from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    todos: [{
        type: Types.ObjectId,
        ref: 'Tasks',
    }],
    categories: [{
        title: {
            type: String,
            required: true
        }
    }]
}, { collection: 'User' });

export const User = mongoose.model('User', userSchema)
    // .find({}, { _id: 0 })
    // .sort({ date: 1 })