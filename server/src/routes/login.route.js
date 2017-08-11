/**
 * Created by minjay on 2017/8/11.
 */
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller')

router.get("/", function (req, res, next) {
    res.redirect("localhost:4200");
})

router.post("/", function (req, res, next) {
    let username = req.body.username,
        password = req.body.password;
    let success = UserController.login(username, password);
    res.send(success);
})

module.exports = router;