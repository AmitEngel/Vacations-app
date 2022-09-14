import express from "express";
import { createServer } from 'http';
import { Server } from "socket.io";
import fileupload from 'express-fileupload';
import { checkAuth } from './middlewares/checkToken.mjs'
import { VacationRouter } from "./routers/vacation.ctrl.mjs";
import { refreshRouter } from "./routers/refresh.ctrl.mjs";
import { authCtrl } from "./routers/auth.ctrl.mjs";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("onDeleteServer", (vId) => socket.broadcast.emit("onDeleteClient", vId));
    socket.on("onEditServer", (vId) => socket.broadcast.emit("onEditClient", vId));
    socket.on("onAddServer", (vacation) => socket.broadcast.emit("onAddClient", vacation));
})

const PORT = 4545;
app.use(express.json());
app.use(fileupload());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/auth', authCtrl)
app.use(checkAuth)
app.use('/refresh', refreshRouter)
app.use('/vacations', VacationRouter);

server.listen(PORT, () => console.log(`server started on port ${PORT}`))