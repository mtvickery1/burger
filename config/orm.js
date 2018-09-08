var connection = require("./connection.js");

var orm = {

    // Grab Data from DB
    selectAll: function (table, cb) {
        var query = `SELECT * FROM ${table}`;
        connection.query(query, function (err, result) {
            if (err) throw (err);
            cb(result);
        })
    },

    // Add Burger to DB
    addBurger: function (table, burgerType, cb) {
        var query = `INSERT INTO ${table} (burger_name, devoured) VALUES ("${burgerType}", FALSE);`
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Update Burger in DB
    updateBurger: function (table, id, cb) {
        var query = `UPDATE ${table} SET devoured=TRUE WHERE id=${id}`;
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;