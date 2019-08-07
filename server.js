const express = require ('express');
const connectDB = require ('./config/db');
const open = require('open');

const app = express();

connectDB();

app.get('/', (req,res)=> res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server started on port : ${PORT}`)
    // open(`http://localhost:${PORT}`);
});