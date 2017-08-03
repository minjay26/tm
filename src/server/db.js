/**
 * Created by minjay on 2017/7/27.
 */
var settings = require('./settings');
var mysql = require('mysql2');
var SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(settings.db, settings.user, settings.password, {
    host: settings.host,
    dialect: 'mysql',
    directory:'src/server/models',
    tables: ['users', 'task']
});

auto.run(function (err) {
});
