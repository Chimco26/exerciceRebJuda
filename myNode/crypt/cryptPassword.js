var Bcrypt = require("bcrypt");
var Crypto = require("crypto-js");

const key = "fghfdhghfdhfhhjkiukuyk";


function crypto() {
    function cryptPassword(password){
        const hash = Bcrypt.hashSync(password, 10); // hash value
        return hash;
    }
    function comparePassword(password, hash){
        return Bcrypt.compareSync(password, hash); // boolean value
    }
    function getEncrypt(input){
        return Crypto.AES.encrypt(input, key).toString();
    }
    function getDecrypt(input) {
        return Crypto.AES.decrypt(input, key).toString(Crypto.enc.Utf8);
    }
    return {
        cryptPassword : cryptPassword,
        comparePassword : comparePassword,
        getEncrypt : getEncrypt,
        getDecrypt : getDecrypt
    }
}

module.exports = crypto();

