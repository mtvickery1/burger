var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT) || 8889,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;