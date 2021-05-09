const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0.gnhoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true,});

app.use(require('./routes'));

app.listen(3333);

