'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.route = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongo_connector = require('./db/mongo_connector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = exports.route = function route(app) {
    app.get('/', function (req, res) {
        if (process.env.NODE_ENV === 'production') {
            res.sendFile(_path2.default.resolve(__dirname, '..', 'build', 'index.html'));
        } else {
            res.sendFile(_path2.default.resolve(__dirname, '..', 'public', 'index.dev.html'));
        }
    });

    app.route('/list').post(function (req, res) {
        console.log(req.body);
        res.end();
    });

    app.route('/messages').get(function (req, res) {
        (0, _mongo_connector.getMessages)(req.query['name'], req.query['conversation'], req.query['branch'], res);
    });

    app.route('/conversations').get(function (req, res) {
        (0, _mongo_connector.getConversations)(req.query['name'], res);
    }).post(function (req, res) {
        (0, _mongo_connector.postConversation)(req.body.name, req.body.defaultBranchName, req.body.creatorId);
        res.end();
    });
};