function users($scope) {
    $scope.login = function(account) {
        $.getJSON('/users', function(data) {
            $.each( data, function() {
                if (this.isActive === true) {
                    if (this.email == account.email) {
                        if (this.password == CryptoJS.SHA256(account.password)) {
                            $.post('/session', { 'email' : account.email });
                            //window.location('/users');
                        }
                    }
                }
            });
        });
    }
    
    $scope.register = function(account) {
        // todo: validate
        new Account({
            email : account.email,
            password : account.password,
            creationDate : new Date,
            lastUpdateDate : new Date,
            isActive : true
        }).save();
    }
}
