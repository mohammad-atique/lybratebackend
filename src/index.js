const express = require("express");
const goodKartsController = require("./controllers/goodKart.controllers.js")

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());


app.use("/goodKarts", goodKartsController);
//--minakshi
const productController = require("./controllers/product.controllers");
app.use("/vitaminandsupplementproducts", productController); 
const weightproductController = require("./controllers/weightmanegproduct.controllers");
app.use("/weightmanegmentproducts", weightproductController);
const childcareproductController = require("./controllers/childcareproduct.controllers");
app.use("/childcareproducts", childcareproductController); 
const foodanddrinkproductController = require("./controllers/foodanddrinkproduct.controllers");
app.use("/foodanddrinkproducts", foodanddrinkproductController); 
const sexualwellnessproductController = require("./controllers/sexualwellnessproduct.controllers");
app.use("/sexualwellnessproducts", sexualwellnessproductController); 


module.exports = app;
