const mongoose = require("mongoose");
const schema = mongoose.Schema;

const record = {
    date: { 
        type: Date,
        
    },
    pin: {
        type: String,
        required: true
    },
    disease: {
        type: String,
    },
    triageLevel: {
        type: String,
    },
    bloodGrp: {
        type: String,
        required: true
    }
};

const recordSchema = new schema(record);
module.exports = mongoose.model("record", recordSchema);