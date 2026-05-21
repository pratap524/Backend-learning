const mongoose = require("mongoose");

const mongoUri = "mongodb://127.0.0.1:27017/practice";

mongoose.connect(mongoUri);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);
