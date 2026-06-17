const userModel = require("./models/user.model");
const bcrypt = require("bcryptjs");

async function seedSystemUser() {
    try {
        // 1. Check if a system user already exists
        const systemUserExists = await userModel.findOne({ systemUser: true });

        if (!systemUserExists) {
            console.log("🔄 No system user found. Seeding default administrator...");

            // 2. Hash a default password
            const defaultPassword = "system1234";
            const hashedPassword = await bcrypt.hash(defaultPassword, 10);

            // 3. Insert the admin user directly bypassing the schema immutability if needed
            // Use userModel.collection.insertOne to write the true systemUser flag cleanly
            await userModel.collection.insertOne({
                name: "System User",
                email: "system123@backendledger.com",
                password: hashedPassword,
                systemUser: true,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            console.log("✨ SUCCESS: Default system user created!");
            console.log("📧 Email: system123@backendledger.com");
            console.log("🔑 Password: system1234");
        } else {
            console.log("✅ System user check: Admin profile already initialized.");
        }
    } catch (error) {
        console.error("❌ Error seeding system user:", error);
    }
}

module.exports = seedSystemUser;