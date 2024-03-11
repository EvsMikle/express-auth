const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller.js");
const focus = require("../controller/focus.controller.js");

module.exports = app => {

    router.post("/signup", user.signup);

    router.post("/login", user.login);

    router.post("/savefocus", focus.save);

    router.post("/getData", focus.getData);

    router.post("/removefocus", focus.delData);
    
    app.use('/', router);
};
