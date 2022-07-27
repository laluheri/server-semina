const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Konfigurasi router
const userRouter = require('./app/api/v1/users/router');

const app = express();

const versionv1 = '/api/v1';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.json({message:'welcome to api seminta'})
});

app.use(`${versionv1}`,userRouter);

module.exports = app;
