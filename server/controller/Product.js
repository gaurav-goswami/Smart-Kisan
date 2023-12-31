const Product = require("../models/Product");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const uploadToCloudinary = require("../utils/cloudinaryUpload");

exports.createCommodity = async (req, res, next) => {
    try {

        const { commodityName, rate, minimumQuantity, stock } = req.body;
        const productImage = req.files.productImage;

        const { id } = req.user;

        console.log(req.body);

        if (!commodityName || !rate || !minimumQuantity || !stock || !productImage) return next(new ErrorHandler("All fields are required", 401));

        let commodityImage;

        try {

            commodityImage = await uploadToCloudinary(productImage, process.env.CLOUDINARY_FOLDER_NAME)

        } catch (error) {
            console.log("error while uploading commodity image", error);
            return next(new ErrorHandler("Something went wrong please try again later.", 403))
        }

        const commodity = await Product.create({ commodityName, rate, minimumQuantity, image: commodityImage.secure_url, stock, seller : id });

        await User.findByIdAndUpdate({ _id: id }, { $push: { products: commodity._id } }, { new: true });

        return res.status(201).json({
            success: true,
            message: "Commodity created successfully"
        })


    } catch (error) {
        console.log("Error in create commodity handler", error.message);
        return next(new ErrorHandler("Something went wrong. Please try again later"))
    }
}

exports.searchProduct = async (req, res, next) => {
    try {
        const { query } = req.params;

        if (!query) {
            return next(new ErrorHandler("Search query is required.", 400));
        }

        const regex = new RegExp(query, "i");

        const products = await Product.find({ commodityName: regex });

        if (products.length === 0) return next(new ErrorHandler("No commodity found" , 404));

        return res.status(200).json({
            success: true,
            message: "Products found successfully.",
            commodity: products,
        });

    } catch (error) {
        console.log("Error in search product handler", error);
        return next(new ErrorHandler("Something went wrong.", 401));
    }
};

exports.productDetails = async (req, res, next) => {
    try {
        
        const {product_id} = req.query;

        if(!product_id) return next(new ErrorHandler("Product Id is required" , 401));

        let product = await Product.findOne({_id : product_id}).populate("seller");

        if(!product || product.length === 0) return next(new ErrorHandler("Product Not found" , 404));

        return res.status(200).json({
            status : 200,
            message : "Product details fetched",
            productDetails : product 
        })
 
    } catch (error) {
        console.log("Error in product detail handler" , error);
        return next(new ErrorHandler("Something went wrong. Please try again later"));
    }
}

exports.getFarmerProduct = async (req, res, next) => {
    try {
        
        const {id} = req.user;
        const products = await Product.find({seller : id});

        if(!products || products.length === 0) return next(new ErrorHandler("You are not selling any harvest"));

        return res.status(200).json({
            success : true,
            message : 'Products fetched',
            total : products.length,
            products
        })

    } catch (error) {
        console.log("Error in get farmer product handler" , error.message)
    }
}
