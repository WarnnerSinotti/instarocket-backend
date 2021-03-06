const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb+srv://semana:semana@cluster0.gnhoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useUnifiedTopology: true, useNewUrlParser: true,});


app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);


