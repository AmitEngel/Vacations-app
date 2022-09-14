import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const user = jwt.verify(token, process.env.jwtsecret);
        req.user = user.username;
        next()
    } catch (error) {
        res.status(401).send('Invalid Token')
    }
}
export {checkAuth}

