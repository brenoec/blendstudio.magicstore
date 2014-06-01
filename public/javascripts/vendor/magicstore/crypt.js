var crypt = function (text) {
    var hash = CryptoJS.SHA256(text);
    return hash;
}

module.exports.crypt = crypt;
