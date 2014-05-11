
/*
 * GET users listing.
 */

var Account = require('../models/account.js');

exports.list = function(req, res){
//    new Account({
//        email : 'breno.ec@gmail.com',
//        password : 'bbbb',
//        creationDate : new Date,
//        lastUpdateDate : new Date,
//        isActive : true
//    }).save();
    
    
    Account.find(function(err, accounts) {
        res.send(accounts);
    });
};

exports.login = function(req, res){
  res.render('users/login', { title: 'MagicStore' });
};

exports.logout = function(req, res){
  res.render('users/logout', { title: 'MagicStore' });
};

exports.register = function(req, res){
  res.render('users/register', { title: 'MagicStore' });
};
