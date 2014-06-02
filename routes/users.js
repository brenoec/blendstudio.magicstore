/*
 * GET users listing.
 */

var Account = require('../models/account.js');

exports.list = function(req, res){
    //var count;
    
    //Account.count({}, function(err, c) {
    //    count = c.toString();
    //});
    
    Account.find(function(error, accounts) {
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
    // Account //
    new Account({
        username : 'Usuário Anônimo',
        email : req.body.email,
        password : req.body.password,
        creationDate : new Date,
        lastUpdateDate : new Date,
        isActive : true
    }).save();
    // End Account /*/
    
    res.render('users/register', { title: 'MagicStore' });
};
