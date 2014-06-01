function getSession (key) {
    var data;
    
    $.ajax({
        type: 'GET',
        url: '/session',
        async: false,
        dataType: "json",
        success:function(result) {
            data = result[key];
        }
    });
    
    return data;
}
