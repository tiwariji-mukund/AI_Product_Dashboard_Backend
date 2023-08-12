const User = require('../models/user');

// get the data of dashboard page
module.exports.dashboard = (req,res) => {
    return res.render('dashboard', {
        title: req.user.name,
    });
}