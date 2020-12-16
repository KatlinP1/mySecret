const mongoose = require('mongoose');
const User = mongoose.model("User");


exports.getSecrets = (req, res) => {
    if(req.isAuthenticated()){
        User.find({"secret": {$ne: null}}, (error, userFound) => {
            if (error){
                console.log(error);
            } else {
                console.log(req.user);
                res.render('secrets', {usersSecrets: userFound});
            }
        });
        /*console.log(req.user);
        res.render('secrets');*/
    } else{
        res.redirect('/login');
    }
}; 


/* app.get('/secrets',(req,res) => {
    res.render('secrets');
}); */

/*
app.get('/secrets', (req, res) => {
    if(req.isAuthenticated()){
        User.find({"secret": {$ne: null}}, (error, userFound) => {
            if (error){
                console.log(error);
            } else {
                console.log(req.user);
                res.render('secrets', {usersSecrets: userFound});
            }
        });
        /*console.log(req.user);
        res.render('secrets');*/
        /*
    } else{
        res.redirect('/login');
    }
}); 

*/


