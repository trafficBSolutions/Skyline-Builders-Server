const mongoose = require('mongoose');
const estimateUserSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
     },
    job: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const EstimateUser = mongoose.model('EstimateUser', estimateUserSchema);
module.exports = EstimateUser;