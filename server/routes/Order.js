const { createOrder, getOrder } = require("../controller/Order");
const { isAuth } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/create-order" , isAuth, createOrder);
router.get("/order-details" , isAuth, getOrder);

module.exports = router;