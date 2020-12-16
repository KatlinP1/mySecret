require('dotenv').config(); //should be first in the row 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const md5 = require('md5');
const session= require('express-session');
const passport= require('passport');
//const passportlocalMongoose= require ('passport-local-mongoose'); //tõmbab ise passport-local kaasa

//const encrypt = require('mongoose-encryption');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
//initialize session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true 
}));

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

require("./models/db");

//const secret = 'thisismysupersecretkey';
//userSchema.plugin(encrypt, {secret:process.env.SECRET, encryptedFields: ['password']});

//useri initasiseerimine 
const User= mongoose.model("User");
//new mongoose.model('User', userSchema);
//strateegia loomine- et passporti kasutada
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); //salvestab cookidesse andmed
passport.deserializeUser(User.deserializeUser()); //loeb lahti 

//Call out all the routes created 
const homeRoutes = require("./routes/home");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const secretRoutes = require("./routes/secrets");

//Using the routes
app.use(homeRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(secretRoutes);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000'); 
});