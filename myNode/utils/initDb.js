const mongoos = require('mongoose');
mongoos.connect("mongodb://127.0.0.1:27017/Chimco26");

const Schema = require("../models/userSchma");

const supervisor1 = new Schema({
    first_name: "Chimeon",
    last_name: "COHEN",
    email: "chimco26@gmail.com",
    role: "supervisor",
    roleNumber: 600
})
supervisor1.save(function(err, newDoc){
    if(err){

        console.log(err);
    }
    else {
        console.log(newDoc);
    }
})

const supervisor2 = new Schema({
    first_name: "Bibi",
    last_name: "NETANYAHU",
    email: "bibinet@gmail.com",
    role: "supervisor",
    roleNumber: 600
})
supervisor2.save(function(err, newDoc){
    if(err){

        console.log(err);
    }
    else {
        console.log(newDoc);
    }
})


