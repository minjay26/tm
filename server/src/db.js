/**
 * Created by minjay on 2017/7/27.
 */
var settings = require('./settings');

const Sequelize = require('sequelize');
const options = {dialect: "mysql"};
const sequelize = new Sequelize(settings.db, settings.user, settings.password, options);

const User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    phone: Sequelize.DATE
}, {
    timestamps: false
});

const Task = sequelize.define('task', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: Sequelize.STRING, field: "user_id"},
    title: {type: Sequelize.STRING},
    content: {type: Sequelize.STRING},
    createdDate: {type: Sequelize.DATE},
    scheduleDate: {type: Sequelize.DATE},
    finishDate: Sequelize.DATE
}, {
    timestamps: false
});

module.exports = {User, Task};
