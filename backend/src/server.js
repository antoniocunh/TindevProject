const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes.js');

const server = express();

mongoose.connect('mongodb+srv://teste:teste@cluster0-urbu7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);