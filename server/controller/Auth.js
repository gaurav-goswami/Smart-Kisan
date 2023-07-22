const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const ErrorHandler = require("../utils/ErrorHandler");
const otpVerificationMail = require("../utils/otpVerificationMail");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateJwtToken");

exports.sendOtp = async (req, res, next) => {
    try {

        const { email } = req.body;
        if (!email) return next(new ErrorHandler("Email is required", 401));

        let user = await User.findOne({ email });

        if (user) return next(new ErrorHandler("User already exists", 401));

        let otp = otpGenerator.generate(4, {
            digits: true
        })

        await otpVerificationMail(email, otp);

        await OTP.create({ email, otp });

        return res.status(200).json({
            success: true,
            message: "Otp sent successfully"
        })

    } catch (error) {
        console.log("error in send otp handler", error);
        return next(new ErrorHandler("Something went wrong. Please try again later"));
    }
}

exports.signup = async (req, res, next) => {
    try {

        const { firstName, lastName, email, password, contactNumber, state, city, otp } = req.body;

        if (!firstName || !lastName || !email || !password || !contactNumber || !state || !city || !otp) return next(new ErrorHandler("All fields are required", 403));

        let user = await User.findOne({ emai });

        if (user) return next(new ErrorHandler("User already exists. Please Login", 400));

        let latestOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        // validating otp
        if (latestOtp.length === 0) {
            return next(new ErrorHandler("Otp not found", 404))
        } else if (otp !== latestOtp[0].otp) {
            return next(new ErrorHandler("Otp did not match", 401))
        }

        let hashedPassword;

        try {
            let genSalt = await bcrypt.genSalt(Number(process.env.GEN_SALT));
            hashedPassword = await bcrypt.hash(password, genSalt);
        } catch (error) {
            console.log("error while hasing the password");
            return next(new ErrorHandler("Something went wrong."))
        }

        user = await User.create({ firstName, lastName, email, password: hashedPassword, contactNumber, state, city, profile: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}` });

        const jwt_payload = {
            id: user._id,
            email: user.email
        }

        const token = generateToken(jwt_payload, { expiresIn: "10d" });

        const cookieOptions = {
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            success: true,
            message: "User registered successfully"
        })


    } catch (error) {
        console.log("error in signup handler", error);
        return next(new ErrorHandler("Something went wrong. Please try again later"));
    }
}

exports.login = async () => {
    try {

        const { email, password } = req.body;
        if (!email || !password) return next(new ErrorHandler("All fields are required", 401));

        let user = await User.findOne({ email }).select("+password");

        if (!user) return next(new ErrorHandler("Invalid Credentials", 404));

        if (user && await bcrypt.compare(password, user.password)) {

            const jwt_payload = {
                id: user._id,
                email: user.email
            }

            const token = generateToken(jwt_payload, { expiresIn: "10d" });

            const cookieOptions = {
                expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, cookieOptions);

            return res.status(200).json({
                success: true,
                message: "Logged In"
            })

        } else {
            return next(new ErrorHandler("Invalid credentials", 401));
        }

    } catch (error) {
        console.log("error in login handler", error);
        return next(new ErrorHandler("Something went wrong. Please try again later"));
    }
}

exports.logout = (req, res, next) => {
    try {

        res.clearCookie("token");

    } catch (error) {
        console.log("Error in logout" , error);
        return next(new ErrorHandler());
    }
}