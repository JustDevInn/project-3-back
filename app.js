const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session')

require("dotenv").config();

var sessionOptions = {
    secret: process.env.SESSION_SECRET,
    cookie: {}
}
app.use(session(sessionOptions));

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// mongoose
//     .connect(process.env.DB, options, (err, connectionInfo) => {
//         if (err) console.log("ERROR", err);
//         else console.log("connected to db");
//     })
mongoose
    .connect('mongodb://localhost/project-3', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(
    cors({
        allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
        exposedHeaders: ["authorization"], // you can change the headers
        origin: process.env.client,
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

app.listen(process.env.PORT, () => {
    console.log("listening, server is running");
})