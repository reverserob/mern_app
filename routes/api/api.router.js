import express from 'express';
import ping from './ping';
import users from './user';
import posts from './posts';
import profile from './profile';
import auth from './auth';

const api = express.Router();

api.use('/api/ping', ping);

api.use('/users', users);
api.use('/posts', posts);
api.use('/profile', profile);
api.use('/auth', auth);

export default api;