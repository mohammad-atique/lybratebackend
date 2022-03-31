const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: Number, required: true},
    strikeprice:{ type: Number, required: true},
    discount:{ type: Number, required: false},
  }
);

module.exports = mongoose.model("product", productSchema);