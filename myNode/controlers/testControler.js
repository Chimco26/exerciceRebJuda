var testSchema = require("../models/testSchema");

function TestControler(){
    function CreateTest(req, res){
        var newTest = new testSchema(req.body);
        newTest.save(function(err, doc){
            console.log("test addTest");
            if(err){
                console.log("error addTest");
                return res.status(500).send("error save test" + err);
            }
            console.log("success addTest");
            return res.status(200).send(doc);
        })
    }
    function DeleteTest(req, res){
        testSchema.deleteOne({_id: req.body._id}, function(err, result){
            console.log("test deleteTest");
            if(err){
                console.log("error deleteTest");
                return res.status(500).send("error delete" + err);
            }
            console.log("success deleteTest");
            res.status(200).send(result);
        })
    }
    function GetAllTests(req, res) {
        testSchema.find({}, function(err, tests){
            console.log("test getAllTest");
            if(err){
                console.log("error getAllTest");
                return res.status(500).send("error getAllTest" + err);
            }
            console.log("success getAllTest");
            console.log(tests)
            res.status(200).send(tests);
        })
    }
    return {
        CreateTest,
        DeleteTest,
        GetAllTests
    }
}

module.exports = TestControler();