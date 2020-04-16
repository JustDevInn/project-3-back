var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Wod = require("../models/wods")
    /* GET users listing. */



router.get("/wods", (req, res) => {
        Wod
            .find()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.send("error");
            })
    })
    // router.get('/', function(req, res, next) {
    //     res.json([
    //         { id: 1, username: "userJsFromApi" },
    //         { id: 2, username: "hardcoded" }
    //     ])

// });


module.exports = router;