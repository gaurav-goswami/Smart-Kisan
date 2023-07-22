const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinaryConnect = require("./config/cloudinary");
const errorMiddleware = require("./middlewares/errorMiddleware");


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

const PORT = process.env.PORT;

app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})