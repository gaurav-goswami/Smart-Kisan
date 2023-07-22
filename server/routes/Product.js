const router = require("express").Router();
const { createCommodity, searchProduct, productDetails } = require("../controller/Product");
const {isAuth} = require("../middlewares/auth");

router.post('/create-commodity' , isAuth, createCommodity);
router.get('/search-commodity/:query' , searchProduct);
router.get('/commodity-detail' , productDetails);

module.exports = router;