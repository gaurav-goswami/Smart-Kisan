const mongoose = require("mongoose");

const OTPSchema = new  mongoose.Schema({
    otp : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const OTP = mongoose.modek("OTP" , OTPSchema);
module.exports = OTP;