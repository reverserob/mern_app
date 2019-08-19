import express from 'express';
import api from './routes/api/api.router';
import connectDB from './config/db';

const app = express();

connectDB();

//INIT Middleware
app.use(express.json({extended:false}));

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