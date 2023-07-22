const cloudinary = require('cloudinary').v2;

const uploadToCloudinary = async (file, folder, quality) => {

    let options = {folder};
    if(quality){
        options.quality = quality;
    }

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);

}

module.exports = uploadToCloudinary;