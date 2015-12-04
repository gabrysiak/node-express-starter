'use strict';

var ctrl = require('../controllers/main');

module.exports = function (app) {
    app.get('/', ctrl.index);
};