
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
  res.render('users/login', { title: 'Express' });
};

exports.logout = function(req, res){
  res.render('users/logout', { title: 'Express' });
};

exports.register = function(req, res){
  res.render('users/register', { title: 'Express' });
};
