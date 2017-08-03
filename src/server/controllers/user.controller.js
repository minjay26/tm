/**
 * Created by minjay on 2017/7/27.
 */
const User = require('../db').User;

const register = function (user) {
    User.create(user).then(function () {
        return;
    });
}

const modifyPassword = function (userId, oldPwd, newPwd) {
    User.findById(userId).then(user => {
        if (user.dataValues || user.dataValues.password != oldPwd) {
            return false;
        }
        user.updateAttributes({
            password: newPwd
        }).success(function () {
            return true;
        })
    });


}

module.exports = {register, modifyPassword}