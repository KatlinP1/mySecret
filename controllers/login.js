const mongoose = require('mongoose');
const passport= require('passport');

/*
const userSchema = new mongoose.Schema({
    email: String, //email =username
    password: String, 
    secret: String
});*/

const User = mongoose.model("User");

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.logUserIn = (req, res) => {
    const user = new User ({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (error) =>{
        if (error){
            console.log(error);
        } else {
            passport.authenticate("local") (req, res, ()=> {
                res.redirect('/secrets');
            });
        }
    });
    
    //versioon enne passporti kasutamist 
    /* const userName= req.body.username;
    const password= md5(req.body.password);
    User.findOne({
        email: userName,
        password: password
    }, (error, userFound)=> {
        if(error){
            console.log(error);
        }else {
            if(userFound){
                    res.render('secrets');
                } else {
                    res.render('login');
                }
        }
    }) */
};

exports.logUserOut = (req, res) => {
    req.logout();
    res.redirect('/');
};