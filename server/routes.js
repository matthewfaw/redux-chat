import path from 'path';
import { getMessages, getConversations, postConversation } from './db/mongo_connector';

export const route = (app) => {
    app.get('/', (req, res) => {
        if (process.env.NODE_ENV === 'production') {
            res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
        } else {
            res.sendFile(path.resolve(__dirname, '..', 'public-dev', 'index.dev.html'));
        }
    });

    app.route('/list')
        .post((req, res) => {
            console.log(req.body);
            res.end();
        });

    app.route('/messages')
        .get((req, res) => {
            getMessages(req.query['name'], req.query['conversation'], req.query['branch'], res);
        })

    app.route('/conversations')
        .get((req, res) => {
            getConversations(req.query['name'], res)
        })
        .post((req, res) => {
            postConversation(req.body.name, req.body.defaultBranchName, req.body.creatorId)
            res.end();
        })
}
