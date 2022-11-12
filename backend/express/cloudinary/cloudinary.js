const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'free-version-image-cloud',
  api_key: process.env.CLOUDINARY_API_KEY || '975767954323924',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'h5egu4prjEAQeVmF3sPgUp3Nif8',
});
module.exports = cloudinary;