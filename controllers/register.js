const mongoose = require('mongoose');

const User = mongoose.model("User");

exports.getRegisterPage = (req, res) =>{
    res.render('register');
};

exports.postRegisterUser = (req,res) => {
        User.register({username: req.body.username}, req.body.password, (error, user) => {
            if (error){
                console.log(error);
                res.redirect('/register');
            } else {
                passport.authenticate('local') (req, res, () =>{
                    res.redirect('/secrets');
                });
            }
        });
    
        //enne passporti kasutamist
        /*const newUser= new User({
            email:req.body.username,
            password: md5(req.body.password) 
        });
        newUser.save((error)=> {
            if(error){
                console.log(error);
            }else {
                res.render('secrets');
            }
        })*/
    };



/*
app.get('/register', (req, res) =>{
    res.render('register');
});

app.post('/register', (req,res) => {
    User.register({username: req.body.username}, req.body.password, (error, user) => {
        if (error){
            console.log(error);
            res.redirect('/register');
        } else {
            passport.authenticate('local') (req, res, () =>{
                res.redirect('/secrets');
            });
        }
    });

    //enne passporti kasutamist
    /*const newUser= new User({
        email:req.body.username,
        password: md5(req.body.password) 
    });
    newUser.save((error)=> {
        if(error){
            console.log(error);
        }else {
            res.render('secrets');
        }
    }) */
//});  