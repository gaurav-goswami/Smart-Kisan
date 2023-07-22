const Product = require("../models/Product");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const uploadToCloudinary = require("../utils/cloudinaryUpload");

exports.createCommodity = async (req, res, next) => {
    try {
        
        const {commodityName, rate, minimumQuantity, stock} = req.body;
        const {commodityImg} = req.files;

        const {id} = req.user;

        if(!commodityName || !rate || !minimumQuantity || !stock || !commodityImage) return next(new ErrorHandler("All fields are required" , 401));

        let commodityImage;

        try {
            
            commodityImage = await uploadToCloudinary(commodityImg , process.env.CLOUDINARY_FOLDER_NAME)

        } catch (error) {
            console.log("error while uploading commodity image" , error);
            return next(new ErrorHandler("Something went wrong please try again later." , 403))
        }

        const commodity = await Product.create({commodityName, rate, minimumQuantity, image : commodityImage.secure_url, stock});

        await User.findByIdAndUpdate({_id : id} , {$push: {products : commodity._id}} , {new : true});

        return res.status(201).json({
            success : true,
            message : "Commodity created successfully"
        })


    } catch (error) {
        console.log("Error in create commodity handler" , error);
        return next(new ErrorHandler("Something went wrong. Please try again later"))
    }
}