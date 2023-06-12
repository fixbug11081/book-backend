const express = require("express");
const cors = require('cors');
const books =require('./routes/api/books')

const connectDB= require("./config/db");
const app = express();

connectDB();

app.use(cors({origin:true, credentials:true}));
app.use(express.json({extended:false}));
app.use('/api/books',books);
const port =process.env.PORT || 8084
app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.listen(port, ()=>console.log("Server is config with port ${port}"));