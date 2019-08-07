const express = require ('express');
const connectDB = require ('./config/db');
import api from './routes/api/api.router';
// import api from './routes/api/api.router';
// const usersRoute = require('./routes/api/user');
// const postsRoute = require('./routes/api/posts');
// const profileRoute = require('./routes/api/profile');
// const authRoute = require('./routes/api/auth');
// const open = require('open');

const app = express();

connectDB();

app.get('/', (req,res)=> res.send('API Running'));

// define routes
app.use('/api', api);

// app.use('/api/users', usersRoute);
// app.use('/api/posts', postsRoute);
// app.use('/api/profile', profileRoute);
// app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server started on port : ${PORT}`)
    // open(`http://localhost:${PORT}`);
});