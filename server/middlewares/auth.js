const ErrorHandler = require("../utils/ErrorHandler");
const { verifyToken } = require("../utils/jwtToken");

exports.isAuth = (req, res, next) => {
    try {

        const { token } = req.cookies;

        console.log("token is", token);
        if (!token || token === null) return next(new ErrorHandler("User is not authenticated", 401));

        try {

            const decoded_payload = verifyToken(token);
            req.user = decoded_payload;

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