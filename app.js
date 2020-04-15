const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session')

require("dotenv").config();

var sessionOptions = {
    secret: "sdfgfsgtersty",
    cookie: {}
}
app.use(session(sessionOptions));


const mongoose = require('mongoose');
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect("mongodb://localhost/project-3", options, (err, connectionInfo) => {
    if (err) console.log('ERROR', err);
}).then((x) => {
    console.log(`Connected to database`)
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(
    cors({
        allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
        exposedHeaders: ["authorization"], // you can change the headers
        origin: "process.env.client",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false
    })
);


app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/index"));
app.use("/", require("./routes/wod"));

app.use((err, req, res, next) => {
    res.status(err.status)
    res.json({
        error: err.message
    })
})


module.exports = app;