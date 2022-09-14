import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { getAllvacations, addVacation, editVacation, deleteVacation, followVacation, unfollowVacation,getFollowedVacations } from "../bl/vacation.bl.mjs";
import { getUsers } from "../bl/auth.bl.mjs";
import { checkIfAdmin, checkIfUser } from "../middlewares/checkAdmin.mjs";
const VacationRouter = Router();

VacationRouter.get('/', async (req, res) => {
    try {
        const vacations = await getAllvacations()
        return res.send(vacations)
    } catch (error) {
        return res.status(400).send(error)
    }
})

VacationRouter.get('/followed', async (req, res) => {
    try {
        const followed = await getFollowedVacations()
        return res.send(followed)
    } catch (error) {
        return res.status(400).send(error)
    }
})

VacationRouter.post('/follow/:vacation_id', checkIfUser, async (req, res) => {
    const userId = req.body.user_id;
    const vacationId = req.params.vacation_id;
    try {
        const followInfo = await followVacation([userId, vacationId])
        console.log(followInfo)
        res.send('follow success')
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})

VacationRouter.delete('/follow/:vacation_id/:user_id', checkIfUser, async (req, res) => {
    const userId = req.params.user_id;
    const vacationId = req.params.vacation_id;
    try {
        await unfollowVacation([userId, vacationId])
        res.send('delete succeeded')
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})


VacationRouter.use(checkIfAdmin)

VacationRouter.post('/add', async (req, res) => {
    let vacationPic;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    vacationPic = req.files.picture;
    const newPicName = uuidv4() + '.' + vacationPic.name.split('.')[1]
    uploadPath = process.cwd() + '/public/images/' + newPicName;

    vacationPic.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
    });

    const { description, destination, from_date, to_date, price } = req.body;
    const allVacations = await getAllvacations()
    const vacation = allVacations.find(v => {
        return v.description === description
    })
    if (vacation) return res.status(500).send('This Vacation already exists!');
    try {
        const newVacation = {
            description: description,
            destination: destination,
            picture: newPicName,
            from_date: from_date,
            to_date: to_date,
            price: price
        }
        await addVacation(newVacation)
        res.send(newVacation)
    } catch (error) {
        res.json({ err: error.message })
    }

})

VacationRouter.put('/edit/:vacation_id', async (req, res) => {
    const vacation = req.params.vacation_id;
    const { description, destination, picture, from_date, to_date, price } = req.body;
    try {
        await editVacation({
            description,
            destination,
            picture,
            from_date,
            to_date,
            price,
        }, vacation)
        res.send('all good')
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})

VacationRouter.delete('/:vacation_id', async (req, res) => {
    const vacation = req.params.vacation_id;
    try {
        await deleteVacation(vacation)
        res.send('delete succeeded')
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})

VacationRouter.get('/users', async (req, res) => {
    try {
        const allUsers = await getUsers()
        res.send(allUsers)
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})

export { VacationRouter }