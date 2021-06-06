const crypto = require("../crypt/cryptPassword");
var split = "-+-";
var time = 3 * 60 * 1000;

function UserToken(isNew, token, firstName, lastName, email){
    if(isNew){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.expirationTime = Date.now() + time;
        this.token = crypto.getEncrypt(
                    firstName + split +
                    lastName + split +
                    this.expirationTime + split +
                    email);   
    } else {
        this.token = token;
        var tokenString = crypto.getDecrypt(token).split(split);
        this.firstName = tokenString[0];
        this.lastName = tokenString[1];
        this.expirationTime = tokenString[2];
        this.email = tokenString[3];
        console.log(this.expirationTime);
    }
    this.isNotExpired = function() {
        if(this.expirationTime && parseInt(this.expirationTime) > Date.now()){
            return true;
        }
        return false;
    }
}

module.exports = UserToken;