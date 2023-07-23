const router = require("express").Router();
const { createCommodity, searchProduct, productDetails, getFarmerProduct } = require("../controller/Product");
const {isAuth} = require("../middlewares/auth");

router.post('/create-commodity' , isAuth, createCommodity);
router.get('/search-commodity/:query' , searchProduct);
router.get('/commodity-detail/:product_id' , productDetails);
router.get('/my-products' , isAuth , getFarmerProduct);

module.exports = router;