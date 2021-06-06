const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    ID: {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    contry: {
        type: String
    },
    city: {
        type: String
    },
    gradYear: {
        type: Number
    },
    academi: {
        type: String
    },
    medicInstitut: {
        type: String
    },
    residency: {
        type: String
    },
    departement: {
        type: String
    },
    role: {
        type: String
    },
    roleNumber: {
        type: Number
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model("user", userSchema);