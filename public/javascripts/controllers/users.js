function users($scope) {
    $scope.login = function(account) {
        $.getJSON( "/users", function( data ) {
            var success = false;

            // TODO: remove alerts and redirect
            $.each( data, function() {
                if (this.email == account.email) {
                    if (this.password == CryptoJS.SHA256(account.password)) {
                        alert("success: " + this.email);
                        success = true;
                    }
                }
            });
            
            if (!success) {
                alert("failed");
            }
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