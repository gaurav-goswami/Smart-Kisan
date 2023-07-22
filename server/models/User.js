const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    contactNumber: {
        type: Number,
        required: true,
        trim: true
    },
    state: {
        type: String,
        enum: ["Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Nagaland", "NCT of Delhi", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttrakhand", "West Bengal"],
        required: true,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },

    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
    profile: {
        type: String,
    }

})

const User = mongoose.model("User", UserSchema);
module.exports = User;