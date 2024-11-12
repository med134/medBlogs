import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djcnq7nmj",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
cloudinary.uploader.upload;
