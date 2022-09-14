import { runQuery } from "../DAL.mjs";
import { UserModel } from "../models/user.model.mjs"

async function getUsers() {
    const sqlGet = 'SELECT * FROM `users`;'
    try {
        const users = await runQuery(sqlGet)
        return users
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addUser(payload) {
    const newUser = new UserModel(...Object.values(payload))
    const sqlinsert = 'INSERT INTO users (id, first_name, last_name, username, password) VALUES (?,?,?,?,?);'
    try {
        await runQuery(sqlinsert, Object.values(newUser))
        return newUser
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getSingleUser(username) {
    const sqlGet = 'SELECT * FROM users WHERE username = ?;'
    try {
        const user = await runQuery(sqlGet, username)
        return user
    } catch (error) {
        throw new Error(error.message)
    } 
}

async function checkIfIsAdmin(username) {
    const sql = 'SELECT `is_admin` FROM users WHERE username = ?'
    try {
        const user = await runQuery(sql, username)
        return user[0].is_admin
    } catch (error) {
        throw new Error(error)
    }
}

export { getUsers, addUser, getSingleUser, checkIfIsAdmin }