const router = require("express").Router();
const { login, sendOtp, signup, logout } = require("../controller/Auth");
const { isAuth } = require("../middlewares/auth");

router.post('/send-otp' , sendOtp);
router.post('/signup' , signup);
router.post('/login' , login);
router.get('/logout' , isAuth, logout)

module.exports = router;