import { runQuery } from "../DAL.mjs";
import { VacationModel } from "../models/vacation.model.mjs"

async function getAllvacations() {
    try {
        const sqlGet = 'SELECT * FROM `vacations`;'
        const vacations = await runQuery(sqlGet)
        return vacations
    } catch (error) {
        throw new Error(error)
    }
}

async function addVacation(payload) {
    const newVacation = new VacationModel(...Object.values(payload))
    const sqlInsert = 'INSERT INTO vacations (id, description, destination, picture, from_date, to_date, price) VALUES (?,?,?,?,?,?,?);'
    try {
        await runQuery(sqlInsert, Object.values(newVacation))
        return newVacation
    } catch (error) {
        throw new Error(error.message)
    }
}

async function editVacation(payload, vId) {
    const updatedVacation = new VacationModel(...Object.values(payload))
    const sqlupdate = `UPDATE vacations SET id=COALESCE(NULLIF(?,''),id), description=COALESCE(NULLIF(?,''),description), destination=COALESCE(NULLIF(?,''),destination) ,picture=COALESCE(NULLIF(?,''),picture), from_date=COALESCE(NULLIF(?,''),from_date), to_date=COALESCE(NULLIF(?,''),to_date), price=COALESCE(NULLIF(?,''), price) WHERE id ="${vId}";`
    try {
        await runQuery(sqlupdate, Object.values(updatedVacation))
        return updatedVacation
    } catch (error) {
        throw new Error(error.message)
    }
}

async function deleteVacation(id) {
    const sqlDelete = 'DELETE FROM `vacations` WHERE id=?;'
    try {
        const vacation = await runQuery(sqlDelete, id)
        return vacation;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function followVacation([uId, vId]) {
    const sqlInsert = 'INSERT INTO `followers`(`user_id`, `vacation_id`) VALUES (?,?);'
    try {
        const follow = await runQuery(sqlInsert, [uId, vId])
        return follow;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function unfollowVacation([uId, vId]) {
    const sqlDelete = 'DELETE FROM `followers` WHERE user_id=? AND vacation_id=?;'
    try {
        const unFollow = await runQuery(sqlDelete, [uId, vId])
        return unFollow
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getFollowedVacations() {
    const sqlGet = 'SELECT vacation_id, COUNT(user_id) FROM `followers` GROUP BY vacation_id;'
    try {
        const followedVacations = await runQuery(sqlGet)
        return followedVacations
    } catch (error) {
        throw new Error(error.message)
    }
}
export { getAllvacations, addVacation, editVacation, deleteVacation, followVacation, unfollowVacation, getFollowedVacations }