/**
 * Created by minjay on 2017/7/27.
 */
var User = require('/models/users');

var register = function (req, res, next, id) {
    User.findAll().then(function (user) {
        console.log(user);
    });

}

module.exports = {register}