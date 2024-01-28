const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/auth')

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '..', 'static')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
};


module.exports = expressConfigurator;