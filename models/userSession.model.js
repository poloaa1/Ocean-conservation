const mongoose = require("mongoose");
const UserSessionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    loginAttempts: {
        type: Number, required: true, default: 0
    },
    lockUntil: {
        type: Number
    }
});

const UserSession = mongoose.model("UserSession", UserSessionSchema);
module.exports = UserSession;