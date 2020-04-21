const createError = require('http-errors')
const User = require("../models/User");
// const router = express.Router();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    User.findById(req.session.currentUser._id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {

        })
})

module.exports = app;