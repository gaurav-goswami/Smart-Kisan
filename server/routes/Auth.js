const router = require("express").Router();
const { login, sendOtp, signup } = require("../controller/Auth");

router.post('/send-otp' , sendOtp);
router.post('/signup' , signup);
router.post('/login' , login);

module.exports = router;