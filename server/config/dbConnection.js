const mongoose = require("mongoose");

const connectDb = async () => {
    try {

        const isConnected = await mongoose.connect(`${process.env.DATABASE_URI}`);

        if(isConnected) console.log("Successfully connected to database")

    } catch (error) {
        console.log("error while connecting to database" , error);
        process.exit(1);
    }
}

module.exports = connectDb;