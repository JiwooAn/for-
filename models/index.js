"use strict";

const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const db = {};

let sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWD,
    database: process.env.DB_DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./schemas/posts.js")(sequelize, Sequelize);

module.exports = db;
