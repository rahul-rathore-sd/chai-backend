import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto', // Automatically detect the file type (image, video, etc.)
        });
        // file is uploaded, delete it from local storage
        console.log('File uploaded to Cloudinary:', response.secure_url);

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); 
        // Remove the locally saved temporary file as the upload operation got failed.
        return null;
    }
};


// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         const result = await cloudinary.uploader.upload(localFilePath, {
//             folder: 'uploads'
//         });
//         return result;
//     } catch (error) {
//         console.error('Error uploading to Cloudinary:', error);
//         throw error;
//     }
// };