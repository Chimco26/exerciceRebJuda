var port = process.env.PORT || 8080;
var token = require("./models/userToken");

const express = require("express");
var app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Chimco26");

app.use(require("cors")())
app.use(express.json());

app.listen(port, function(){
    console.log("qqq");
});

var userRoute = require("./routes/UsersRoute");
var loginRoute = require("./routes/LoginRoute");
var testRoute = require("./routes/testRoute");

app.use("/auth", loginRoute);

app.use("/api", function(req, res, next){
    console.log(req.headers["x-access-token"]);
    userToken = new token(false, req.headers["x-access-token"]);
    console.log("verify token" + userToken.token);
    if(userToken.isNotExpired()){
        console.log("good token");
        req.user = userToken;
        return next();
    }
    console.log("no good token");
    res.status(401).send("TOKEN ERROR!!!");
});

app.use("/api/users", userRoute);

app.use("/api/supervisors", userRoute);

app.use("/api/tests", testRoute);

