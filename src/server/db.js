const mongoose = require("mongoose");

module.exports = async (MONGO_URI) => {
    try {
        mongoose.connect(MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.log("Failed to connect to DB. Error:", error);
    }
};
