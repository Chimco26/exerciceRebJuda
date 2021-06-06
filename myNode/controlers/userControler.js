var userSchema = require("../models/userSchma")

function UserControler(){
    function CreateUser(req, res){
        var newUser = new userSchema(req.body);
        newUser.save(function(err, user){
            if(err){
                return res.status(500).send({msg: err})
            }
            res.status(201).send(user);
        })

    }
    function DeleteUser(req, res){
        userSchema.deleteOne({_id: req.params._id}, function(err, result){
            if(err){
                return res.status(500).send({"msg": "db pbm"})
            }
            if(!result.n){
                return res.status(404).send();
            }
            return res.status(200).send({result: result});
        })
    }
    function UpdateUser(req, res) {
        console.log("update test");
        userSchema.updateOne({_id: req.body._id}, {$set: req.body}, function(err, result){
            if(err){
                console.log("error");
                return res.status(402).send(err);
            }
            if(!result.n){
                console.log("NOT FOUND");
                return res.status(404).send("NOT FOUND");
            }
            console.log("youppi");
            res.status(200).send({result: result})
        })
    }
    function GetUserById(req, res){
        userSchema.findOne({_id: req.params._id}, function(err, user){
            if(err){
                return res.status(500).send({msg: err});
            }
            if(!user){
                return res.status(404).send({"msg": "NOT FOUND"});
            }
            res.status(200).send(user);
        })
    }
    function GetUserByName(req, res){
        userSchema.findOne({first_name: req.params}, function(err, user){
            if(err){
                return res.status(500).send({"msg": "db pbm"});
            }
            if(!user){
                return res.status(404).send({"msg": "NOT FOUND"});
            }
            res.status(200).send(user);
        })
    }
    function GetAll(req, res){
        console.log("getAllUser test");
        userSchema.find({}, function(err, users) {
            if(err){
                console.log("getAllUser error");
                return res.status(500).send({});
            }
            console.log(users);
            console.log("getAllUser success");
            return res.status(200).send(users);  
          });
    }
    function SendTest(req, res) {
        
    }
    return{
    CreateUser,
    DeleteUser,
    UpdateUser,
    GetUserById,
    GetUserByName,
    GetAll
    }
}

module.exports = UserControler();