function users($scope) {
    $scope.login = function(account) {
        
        alert($.get('/users') | JSON);
        
        //if (!account.email.localeCompare('lucas')) {
        //    account.email = 'breno';
        //}
        
        alert(account.email);
        alert(account.password);

        //Account.findOne({ email : account.email, isActive : true }, function(error, acc) {
            // todo: crypt password
            
        //    if (error) {
        //        alert('error');
        //    }
            
        //    if (account.password.localeCompare(acc.password)) {
        //        alert('bad password');
        //    }
        //    else {
        //        alert('else password');
        //    }
        //});
        
        alert('end');
        
        window.location = '/users';
    }
    
    $scope.register = function(account) {
        // todo: validate
        
        // todo: crypt password
        
        new Account({
            email : account.email,
            password : account.password,
            creationDate : new Date,
            lastUpdateDate : new Date,
            isActive : true
        }).save();
    }
}