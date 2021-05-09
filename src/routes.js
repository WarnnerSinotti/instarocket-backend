const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploud');


const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const uploud = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', uploud.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;