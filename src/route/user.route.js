const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller.js");

module.exports = app => {

    router.post("/signup", user.signup);

    router.post("/login", user.login);
    
    app.use('/', router);
};
