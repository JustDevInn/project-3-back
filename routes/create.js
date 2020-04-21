const express = require("express");
const app = express();
const Item = require("../models/wods");


app.get("/create", (req, res) => {
    res.render("create");
})

app.post("/create", (req, res) => {
    console.log(req.body);
    Item
        .create({
            name: req.body.title,
            wod: req.body.image,
            description: req.body.description,
            tag: req.body.tag

        })
        .then((newWod) => {
            // res.redirect(`/itemdetail/${newWod._id}`);
        })
        .catch((err) => {
            res.send("error");
        })
})

module.exports = app;