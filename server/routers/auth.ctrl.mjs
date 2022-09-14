import { Router } from "express";
import dotenv from "dotenv";
import { check, validationResult } from "express-validator";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { addUser, getUsers } from "../bl/auth.bl.mjs";

dotenv.config()

const authCtrl = Router()

authCtrl.post('/register', [
    check("password", "*Please provide a password greater than 5 characters")
        .isLength({
            min: 6
        }),
    check("firstName", "*Please provide a valid Name")
        .isLength({
            min: 2
        }).toUpperCase(),
    check("lastName", "*Please provide a valid Last Name")
        .isLength({
            min: 1
        }).toUpperCase(),
    check("username", "*Please provide a valid username")
        .isLength({
            min: 3
        }),
], async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors:errors.array()
        })
    }
    const allUsers = await getUsers();
    const user = allUsers.find(user => {
        return user.username === username
    })
    if (user) {
        return res.status(500).json(
            {
                "errors": [
                    {
                        "msg": "Username Already Exists"
                    }
                ]
            }
        )
    }
    const hashedPassword = await hash(password, 10);

    try {
        await addUser({
            firstName,
            lastName,
            username,
            password: hashedPassword
        })
        const token = jwt.sign({ username }, process.env.jwtsecret)
        console.log(token)
        return res.json({ token, ...user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            errors: error
        })
    }
});

authCtrl.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const allUsers = await getUsers()
    const user = allUsers.find(user => {
        return user.username === username
    })
    if (!user) {
        return res.status(500).send(
            {
                "errors": [
                    {
                        "msg": "Invalid Credentials"
                    }
                ]
            }
        )
    }
    const isMatch = await compare(password, user.password)
    if (!isMatch) {
        return res.status(500).json(
            {
                "errors": [
                    {
                        "msg": "Invalid Credentials"
                    }
                ]
            }
        )
    }
    try {
        const token = jwt.sign({ username }, process.env.jwtsecret)
        return res.json({ token, ...user })
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export { authCtrl } 