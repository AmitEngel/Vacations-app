import { checkIfIsAdmin } from "../bl/auth.bl.mjs";

const checkIfAdmin = async (req, res, next) => {
    try {
        const admin = await checkIfIsAdmin(req.user)
        if (admin)
            return next()
        throw new Error('You are not Allowed! (Allowed only for admin)')
    } catch (error) {
        res.status(403).send(error.message)
    }
}

const checkIfUser = async (req, res, next) => {
    try {
        const admin = await checkIfIsAdmin(req.user)
        console.log(req.user, admin)
        if (!admin)
            return next()
        throw new Error('You are not Allowed! (Allowed only for regular users)')
    } catch (error) {
        res.status(403).send(error.message)
    }
}

export { checkIfAdmin, checkIfUser }