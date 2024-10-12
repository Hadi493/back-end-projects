import mongoose from "mongoose";
import { DB_NAME } from '../constants'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connection || DB Host:: ${connectionInstance}`)
    } catch (error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1)
    }
}