var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Render DB to index file
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

// Get all JSON Data
router.get("/api/burgers", function(req,res) {
    burger.selectAll(function(data) {
      return res.json(data);
    });
  });

// Add Burger
router.post("/api/burgers", function (req, res) {
    burger.createBurger(req.body.name, function (result) {
        res.sendStatus(200);
    });
});

// Devour Burger
router.put("/api/burgers/:id", function(req,res) {
    var id = req.params.id;
    burger.devour(id, function(result) {
      res.sendStatus(200);
    });
  });


module.exports = router;