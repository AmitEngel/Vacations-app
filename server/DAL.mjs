import { createConnection } from "mysql";
import { promisify } from 'util';

const db = createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "vacations_managment"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});

const asyncQuery = promisify(db.query).bind(db);

async function runQuery(query, payload) {
    return asyncQuery(query, payload)
}

export { runQuery }