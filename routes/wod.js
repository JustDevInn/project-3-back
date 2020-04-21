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


module.exports = router;