const router = require("express").Router();
const { createCommodity } = require("../controller/Product");
const {isAuth} = require("../middlewares/auth");

router.post('/create-commodity' , isAuth, createCommodity);

module.exports = router;