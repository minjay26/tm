var express = require('express');
var router = express.Router();

var db = require('../db')

var UserController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/register", function (req, res, next) {
    UserController.register(req, res, next, 1);
    res.render("user/register")
})

module.exports = router;
