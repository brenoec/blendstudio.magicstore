
/**
 * Module dependencies.
 */

var express = require('express');

var routes = require('./routes');
var session = require('./routes/session');
var users = require('./routes/users');

var http = require('http');
var path = require('path');

var app = express();

var mongoose = require('mongoose');
// mongoose.connect('mongodb://lucastleite:Bonita8*@oceanic.mongohq.com:10004/app24606530');
mongoose.connect('mongodb://localhost/magicstore');

var AccountSchema = require('./models/account.js').AccountSchema;
var Account = mongoose.model('accounts', AccountSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon('public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('bl3nd5tud10'));
app.use(express.session());
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/session', session.get);
app.post('/session', session.set);

app.get('/users', users.list);
app.get('/users/login', users.login);
app.get('/users/logout', users.logout);
app.post('/users/register', users.register);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


