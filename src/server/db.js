const mongoose = require("mongoose");

module.exports = async () => {
    try {
        mongoose.connect(
            "mongodb+srv://dominik:ENfksqotRrBKOALf@cluster0.fxwrinb.mongodb.net/todoapp?retryWrites=true&w=majority"
        );
        console.log("Connected to DB");
    } catch (error) {
        console.log("Failed to connect to DB. Error:", error);
    }
};
