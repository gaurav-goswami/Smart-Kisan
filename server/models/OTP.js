const mongoose = require("mongoose");

const OTPSchema = new  mongoose.Schema({
    otp : {
        type : String,
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

const OTP = mongoose.model("OTP" , OTPSchema);
module.exports = OTP;