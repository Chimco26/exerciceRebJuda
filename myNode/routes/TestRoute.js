const express = require('express');
const testControler = require("../controlers/testControler");

var testRoutes = express.Router();

testRoutes.get("/getAll", testControler.GetAllTests);
testRoutes.post("/delete", testControler.DeleteTest);
testRoutes.post("/create", testControler.CreateTest);

module.exports = testRoutes;
