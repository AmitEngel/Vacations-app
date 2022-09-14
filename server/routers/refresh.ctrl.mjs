import { Router } from "express";
import { getSingleUser } from "../bl/auth.bl.mjs";
import { getFollowedVacations } from "../bl/vacation.bl.mjs";

const refreshRouter = Router();

refreshRouter.get('/user_info', async (req, res) => {
    try {
        const user = await getSingleUser(req.user)
        return res.send(user) 
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

refreshRouter.get('/:username/follow_info', async (req, res) => {
    const username = req.params.username;
    try {
        const followed = await getFollowedVacations(username)
        return res.send(followed)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})
export {refreshRouter} 