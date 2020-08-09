const mongoose = require("mongoose");
const schema = mongoose.Schema;

const patient = {
    pin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bloodGrp: {
        type: String,
        required: true
    }
};

const patientSchema = new schema(patient);
module.exports = mongoose.model("patient", patientSchema);