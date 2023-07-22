const jwt = require("jsonwebtoken");
import ErrorHandler from "../utils/ErrorHandler";

exports.isAuth = (req, res, next) => {
    try {

        const { token } = req.cookies;

        console.log("token is", token);
        if (!token || token === null) return next(new ErrorHandler("User is not authenticated", 401));

        try {

            // if the token is verified then we'll store the user details in req object

        } catch (error) {
            console.log("error in isAuth middleware", error);
            return next(new ErrorHandler("Token is invalid", 401));
        }

        next();

    } catch (error) {
        console.log("error in isAuth middleware", error.message);
        return res.status(401).json({
            success: false,
            status: 401,
            message: "Token validation failed"
        })
    }
}