const jwt = require("jsonwebtoken");

exports.generateToken = (payload, timeToExpire) => {
    return jwt.sign(payload, process.env.JWT_SECRET, timeToExpire);
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}
