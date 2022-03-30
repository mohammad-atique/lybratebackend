const express = require("express");
const goodKartsController = require("./controllers/goodKart.controllers.js")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());


app.use("/goodKarts", goodKartsController);

module.exports = app;
