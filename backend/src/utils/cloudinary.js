import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "image"
        })
        // console.log("File uploaded", response.url);
        // fs.unlinkSync(process.cwd()+"/"+localFilePath)
      // console.log( fs.unlinkSync(process.cwd()+"/"+localFilePath))
        return response;
    } catch (error) {
        // fs.unlinkSync(process.cwd()+"/"+localFilePath)
        return null;
    }
}

export { uploadOnCloudinary }
