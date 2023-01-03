import { Router } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./../models/user.js";

const router = Router();

router.post('/registration',
    [
        check('firstName', 'Неккоректный имя').isLength({ min: 1 }),
        check('lastName', 'Неккоректный фамилия').isLength({ min: 1 }),
        check('email', 'Неккоректный email').isEmail(),
        check('password', 'Неккоректный пароль').isLength({ min: 6 }),

    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const { firstName, lastName, email, password } = req.body

            const isUsed = await User.findOne({ email })

            if (isUsed) {
                return res.status(300).json({ message: 'Данный пользоватеель существует' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({
                firstName, lastName, email, password: hashedPassword, categories: [{title: 'Work'}, {title: 'Personal'}]
            })
            await user.save()

            res.status(201).json({resultCode: 0, message: 'пользователь создан' })

        } catch (error) {
            console.log(error)
        }
    }
)

router.post('/login',
    [
        check('email', 'Неккоректный email').isEmail(),
        check('password', 'Неккоректный пароль').isLength({ min: 6 }),

    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при логине'
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({message: 'Несуществующий пользователь'})
            }

            const isMatch = bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Пароль не совпадает'})
            }

            const jwtSecret = 'dfcgvhbjknl;kbvjdzydxfcgkhvjbknl';

            const token = jwt.sign(
                {userId: user.id},
                jwtSecret,
                {expiresIn: '1h'}
            )
            console.log(user.categories)
            res.json({resultCode: 0, token, userId: user.id, userFirstName: user.firstName, userLastName: user.lastName, categories: user.categories})

        } catch (error) {
            console.log(error)
        }
    }
)


export default router;