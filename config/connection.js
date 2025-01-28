import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
// connection function for connecting to database 
const connectDB = async () => {
    try {
        console.log("MONGOURI",process.env.MONGOURI);

        let connection = await mongoose.connect(process.env.MONGOURI, { dbName: "youtubeClone" });
        if (connection) {
            console.log("connection Success")
        }
    } catch (err) {
        console.log("connection failed with error : " + err);
    }
}
// calling the connection function
connectDB();
