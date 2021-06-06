const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testSchema = new Schema({
    supervisor_id:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    name: {
        type: String
    },
    key: {
        type: String
    },
    file: {
        
    }
})

module.exports = mongoose.model("test", testSchema);