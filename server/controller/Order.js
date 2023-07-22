const Order = require("../models/Orders");
const Product = require("../models/Product");
const ErrorHandler = require("../utils/ErrorHandler");
const mailSender = require("../utils/mailSender");

exports.createOrder = async (req, res, next) => {
    try {

        const { product_id, quantity } = req.body;
        const { id, email } = req.user;

        if (!product_id) return next(new ErrorHandler("ProductId is required", 401));

        let product = await Product.findOne({ _id: product_id });

        if (!product) return next(new ErrorHandler("Product not found", 404));

        if (id === product.seller._id) return next(new ErrorHandler("Seller cannot purchase their own product", 401));

        if (product.stock >= quantity) {

            const order = await Order.create({ product: product_id, quantity, user: id });

            // reducing the stock
            product.stock -= quantity;
            await product.save();

            await mailSender(email, "Order Confirmation Mail 📩", `<h1>Your order of ${product.commodityName},quantity ${quantity} has successfully created 🥳🥳</h1>
            <p>Your Order ID is ${order.orderId}</p>
            `);

            return res.status(200).json({
                success: true,
                message: "Order created successfully",
                orderDetails: order
            })
        }
        else {
            return next(new ErrorHandler("Cannot place order that exceed stock quantity" , 401))
        }


    } catch (error) {
        console.log("error in create order", error);
        return next(new ErrorHandler("Something went wrong.", 401));
    }
}

exports.getOrder = async (req, res, next) => {

    try {
        
        const {id} = req.user;
        const orders = await Order.find({user : id});

        if(!orders || orders.length === 0) return next(new ErrorHandler("No orders." , 401));

        return res.status(200).json({
            success : true,
            message : "Orders fetched",
            orders
        })

    } catch (error) {
        console.log("Error in get order handler" , error);
        return next(new ErrorHandler("Something went wrong please try again later."))
    }

}