const cloudinary = require('../cloudinary/cloudinary')
const handler = async (req, res) => {
    try {
      const { name,type,base64str } = req.body.input
      const result = await cloudinary.uploader.upload(`data:image/jepg;base64,${base64str}`)
      console.log(result.url)
      return res.json({
        file_path: result.url
      })
    }
    catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e
      })
    }
  }
  module.exports = handler