const User = require('../models/user');

// load data for sign-up page
module.exports.signUp = (req,res) => {
    return res.render('signup', {
        title: "Create Account"
    });
}

// load the data for sign-in page
module.exports.home = (req,res) => {
    return res.render('home', {
        title: "Log In"
    });
}

// get the data to create an account
module.exports.create_user = async (req, res) => {
    if(req.body.password != req.body.confirm_password){
        console.log('incorrect password');
        return res.redirect('back');
    }
    try{
        const user = await User.findOne({
            username: req.body.username
        });
        if(!user){
            const newUser = await User.create(req.body);
            console.log('new user created');
            return res.redirect('/');
        }
        else{
            console.log('username is already in use');
            return res.redirect('back');
        }
    }
    catch(err){
        if(err){
            console.log(`Error in crating account ${err}`);
            return;
        }
    }
}

// get the data to create session after log in
module.exports.create_session = (req,res) => {
    console.log('welcome to your profile');
    return res.redirect('/admin/dashboard');
}

module.exports.destroy_session = (req, res, next) => {
    req.logout((err) => {
        if(err) return next(err);
        console.log('signout of the account');
        return res.redirect('/');
    });
}