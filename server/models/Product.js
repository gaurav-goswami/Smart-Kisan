const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    commodityName : {
        type : String,
        required : true,
        trim : true
    },
    rate : {
        type : Number,
        required : true,
        trim : true
    },
    seller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    minimumQuantity : {
        type : Number,
        required : true,
        trim : true
    },
    image : {
        type : String,
    },
    stock : {
        type : Number,
        required :true,
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;