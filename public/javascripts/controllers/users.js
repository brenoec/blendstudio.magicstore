function users($scope) {
    $scope.login = function(account) {
        $.getJSON('/users', function(data) {
            $.each( data, function() {
                if (this.isActive === true) {
                    if (this.email == account.email) {
                        if (this.password == CryptoJS.SHA256(account.password)) {
                            $.post('/session', { 'email' : account.email });
                            window.location.assign('/users/login');
                        }
                    }
                }
            });
        });
    }
    
    $scope.register = function(account) {
        $.post('/users/register', { 'email' : account.email, 'password' : CryptoJS.SHA256(account.password).toString() });
    }
}
