// Set up MySQL connection.
const mysql = require('mysql');
const util = require('util');
const dotenv = require("dotenv");
dotenv.config();
let connection;
if (process.send.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection=mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database:"trackfood"
});
}
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
connection.query = util.promisify(connection.query);
module.exports = connection;