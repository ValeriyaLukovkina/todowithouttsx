import { Router } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./../models/user.js";

const router = Router();

router.post('/add', async (req, res) => {
    try {
        const { userId, categoryName } = req.body;
        await User.findByIdAndUpdate(userId, { $push: { categories: { title: categoryName } } });
        const user = await User.findById(userId)

        const newCategory = user.categories[user.categories.length - 1]
        if (!user) {
            return res.json({ message: 'Пользователь не найден' })
        }
        res.status(201).json({ resultCode: 0, newCategory })

    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete/:userId/:categoryId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { categories: { _id: req.params.categoryId } } });
        if (!user) {
            return res.json({ message: 'Пользователь не найден' })
        }
        res.status(201).json({ resultCode: 0 })

    } catch (error) {
        console.log(error)
    }
})

export default router;