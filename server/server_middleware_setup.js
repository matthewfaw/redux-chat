import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';

export const connectMiddleware = (app) => {
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.resolve(__dirname, '..', 'build')));
    } else {
        app.use(express.static(path.resolve(__dirname, '..', 'public-dev/js')));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
