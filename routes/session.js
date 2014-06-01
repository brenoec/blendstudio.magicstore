
/*
 * GET home page.
 */

exports.get = function(req, res){
  res.send(req.session);
};

exports.set = function(req, res){
    for (var key in req.body) {
        req.session[key] = req.body[key];
    }

    res.send(req.session);
};