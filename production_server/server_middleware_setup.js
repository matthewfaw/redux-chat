'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectMiddleware = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectMiddleware = exports.connectMiddleware = function connectMiddleware(app) {
    if (process.env.NODE_ENV === 'production') {
        app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'build')));
    } else {
        app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'public-dev/js')));
    }
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: false }));
};