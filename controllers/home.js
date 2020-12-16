const mongoose = require('mongoose');

exports.getHomePage = (req, res) => {
    res.render('home');
};


/*app.get('/', (req, res) => {
    res.render('home');
}); */