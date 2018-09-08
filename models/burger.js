var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    createBurger: function (burgerType, cb) {
        orm.addBurger("burgers", burgerType, function (res) {
            cb(res);
        });
    },

    devour: function (id, cb) {
        orm.updateBurger("burgers", id, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;