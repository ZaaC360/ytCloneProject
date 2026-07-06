import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);


async function connectDB() {

    try {
        const dbUrl = process.env.MONGODBURL;
        if (!dbUrl) {
            throw new Error("MONGODBURL environment variable is not defined in .env file");
        }
        const uri = `${dbUrl.replace(/\/$/, "")}/${process.env.PROJECT}`;
        let connectionInstance = await mongoose.connect(uri);
        console.log(`Hosted at : ${connectionInstance.connection.host}`);
    }
    catch (err) {

        console.error("Database Connedction Error: ", err);
        process.exit(1);
    }
}


export default connectDB;