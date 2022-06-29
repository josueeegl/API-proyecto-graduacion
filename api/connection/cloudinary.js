const cloudinary = require("cloudinary");
const cloudinary_var = require("../../config");

cloudinary.config({
  cloud_name: cloudinary_var.cloud_name,
  api_key: cloudinary_var.api_key,
  api_secret: cloudinary_var.api_secret,
});

module.exports = {
  uploadFiles: async (filePath) => {
    return await cloudinary.v2.uploader.upload(filePath, {
      folder: "yourFinz",
    });
  },
  deletFiles: async (publicId) => {
    return await cloudinary.v2.uploader.destroy(publicId);
  },
};
