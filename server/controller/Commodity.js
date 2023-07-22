const ErrorHandler = require("../utils/ErrorHandler");
const axios = require("axios");

exports.getCommodityRates = async (req, res, next) => {

    try {

        const { state, district, market, commodity } = req.body;
        if (!state || !commodity || !market || !commodity) return next(new ErrorHandler("All fields are required"));

        const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${process.env.COMMODITY_API_KEY}&format=json&limit=300&filters%5Bstate%5D=${state}&filters%5Bdistrict%5D=${district}&filters%5Bmarket%5D=${market}&filters%5Bcommodity%5D=${commodity}`

        const response = await axios.get(url)

        return res.status(200).json({
            success: true,
            message: "Data fetched",
            totalResult: response?.data?.records.length,
            result: response?.data
        })

    } catch (error) {
        console.log("Error while fetching rates", error);
        return next(new ErrorHandler("Something went wrong while fetching data"));
    }

}