const express = require('express');
const userControler = require("../controler");

var userRoutes = express.Router();

userRoutes.use(function(req, res, next){
    
    })

userRoutes.post("/create", userControler.CreateUser);
userRoutes.get("/getAll", userControler.GetAll);
userRoutes.put("/update", userControler.UpdateUser);
userRoutes.get("/:_id", userControler.GetUserById);
userRoutes.get("/name/:name", userControler.GetUserByName);
userRoutes.delete("/:_id", userControler.DeleteUser);

module.exports = userRoutes;