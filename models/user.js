const mongoose = require('mongoose');
const passportlocalMongoose= require ('passport-local-mongoose'); //tõmbab ise passport-local kaasa

const userSchema = new mongoose.Schema({
    email: String, //email =username
    password: String, 
    secret: String
});

//kellele userSchema antakse - enne useri initsaliseerimist 
userSchema.plugin(passportlocalMongoose);

mongoose.model('User', userSchema);