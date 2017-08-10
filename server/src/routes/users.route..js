const express = require('express');
const router = express.Router();

const db = require('../db')

const UserController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/register", function (req, res, next) {
    res.render("user/register")
})

router.post("/register", function (req, res, next) {
    let content = req.body;
    UserController.register(content);
    res.sendStatus(200).send();
})

router.get("/modify_password", function (req, res, next) {

})

router.put("/modify_password", function (req, res, next) {
    let content = req.body;
    let success = UserController.modifyPassword(content.userId, content.oldPwd, content.newPwd);
    res.send(success);
})

module.exports = router;
