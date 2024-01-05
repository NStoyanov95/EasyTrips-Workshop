const path = require('path');
const express = require('express');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '..', 'static')));
    app.use(express.urlencoded({ extended: false }));
}

module.exports = expressConfigurator;


