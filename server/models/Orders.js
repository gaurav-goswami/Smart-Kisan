const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderId : {
        type : String,
        default : function () {
            return Math.floor(Math.random() * 1e8)
        }
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },

    // the person who has made the order
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Order = mongoose.Schema("Order" , OrderSchema);
module.exports = Order;