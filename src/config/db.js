const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        console.log("Attempting to connect with URI:", process.env.MONGO_URI.split('@')[1]); // Logs cluster info only for safety
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ SUCCESS: Connected to MongoDB");
    } catch (err) {
        console.log("❌ CONNECTION FAILED");
        console.log("Error Name:", err.name);
        console.log("Error Code:", err.code);
        console.error("Full Message:", err.message); 
        process.exit(1);
    }
};

module.exports = connectToDB;
