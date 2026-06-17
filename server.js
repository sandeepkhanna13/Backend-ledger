require("dotenv").config()

const app = require("./src/app")
const connectToDB = require("./src/config/db")
const seedSystemUser = require("./src/seed") // 1. Import the automatic seed script
const mongoose = require("mongoose")

// Initialize the database connection
connectToDB()

// 2. Wait for the MongoDB connection to open successfully, then seed and boot the server
mongoose.connection.once("open", async () => {
    console.log("✅ SUCCESS: Connected to MongoDB")
    
    // Run the script to check/create the system admin user
    await seedSystemUser() 
    
    app.listen(3000, () => {
        console.log("🚀 Server is running on port 3000")
    })
})

// Optional: Handle connection errors gracefully
mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err)
})