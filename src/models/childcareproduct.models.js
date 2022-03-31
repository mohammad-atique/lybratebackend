const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: Number, required: true},
    strprice:{ type: Number, required: true},
    discount:{ type: Number, required: false},
  }
);

module.exports = mongoose.model("product", productSchema);