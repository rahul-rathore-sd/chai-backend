import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
  path:"./env"
});


connectDB()
.then(() => {
  application.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });  
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});







// Test code
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();