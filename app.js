const cors = require("cors");
const express = require("express");
const db = require("./models/index.js");

const app = express();

db.sequelize
    .sync()
    .then(() => {
        console.log("데이터베이스가 성공적으로 연결되었습니다.");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello, world!!!");
});

module.exports = app;
