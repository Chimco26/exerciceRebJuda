const express = require("express");
var loginRoute = express.Router();
var userSchema = require("../models/userSchma");
var crypto = require("../crypt/cryptPassword");
var token = require("../models/userToken");

loginRoute.post("/register", function(req, res){
    req.body.password = crypto.cryptPassword(req.body.password);
    var userModel = new userSchema(req.body);
    userModel.save(function(err, newUser){
        if(err){
            return res.status(500).send("error ahi!!! : " + err);
        }
            userToken = new token(true, null, newUser.first_name, newUser.last_name, newUser.email);
            newUser.token = userToken.token;
            return res.status(201).send(newUser);
    })
})

loginRoute.post("/login", function(req, res){
    console.log("login test");
    userSchema.findOne({email: req.body.email},
        {}, function(err, user){
        console.log(user);
        if(!user || !crypto.comparePassword(req.body.password, user.password)){
            return res.status(401).send({msg: "email or password not exists"})
        }
        if(err){
            return res.status(500).send(err);
        } else {
            userToken = new token(true, null, user.first_name, user.last_name, user.email);
            var newUser = new userSchema(user);
            newUser.token = userToken.token;
            newUser.password = "";
            return res.status(201).send(newUser);
        }
    })
})

module.exports = loginRoute;