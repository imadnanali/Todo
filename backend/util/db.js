import mongoose from "mongoose";


const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("DB connected successfully");
    } catch (error) {
        console.error("Mongo db couldn't connected", error.message);
        process.exit(1);
    }

}

export default connectDB;