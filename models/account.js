var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AccountSchema = new schema({
    email : { type : String, required : true },
    password : { type : String, required : true },
    creationDate : { type : Date, required : true },
    lastUpdateDate : { type : Date, required : true },
    isActive : { type : Boolean, defalte : true }
});

module.exports = mongoose.model('accounts', AccountSchema);
