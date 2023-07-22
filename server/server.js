const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinaryConnect = require("./config/cloudinary");
const errorMiddleware = require("./middlewares/errorMiddleware");

// routes import 
const AuthRouter = require("./routes/Auth");
const ProductRoute = require("./routes/Product");
const CommodityRoute = require("./routes/Commodity");
const OrderRoute = require("./routes/Order");

dotenv.config({
    path: "./config/config.env"
})

const app = express()

connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
)

cloudinaryConnect();

// using routes
app.use("/api/v1/auth" , AuthRouter);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/commodity", CommodityRoute);
app.use("/api/v1/order" , OrderRoute);

const PORT = process.env.PORT;

app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})