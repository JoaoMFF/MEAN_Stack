const constants = require("./../config/constants");
const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: mongoose.Schema.Types.Date,
        default: Date.now()
    },
    entity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "entityType"
    },
    entityType: {
        type: mongoose.Schema.Types.String,
        emum: [constants.POST, constants.COMMENT, constants.USER],
        required: true
    },
    action: {
        type: mongoose.Schema.Types.String,
        emum: [
            constants.CREATE,
            constants.READ,
            constants.UPDATE,
            constants.DELETE
        ],
        required: true
    }
});

const User = mongoose.model(constants.LOG, LogSchema);

module.exports = User;
