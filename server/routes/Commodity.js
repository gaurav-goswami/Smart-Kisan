const { getCommodityRates } = require("../controller/Commodity");
const { isAuth } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/daily-commodity-rates/:commodityName/:state" , isAuth, getCommodityRates);

module.exports = router;