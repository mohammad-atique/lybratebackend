const express = require("express");
const goodKartsController = require("./controllers/goodKart.controllers.js")

const app = express();

app.use(express.json());


app.use("/goodKarts", goodKartsController);

module.exports = app;
