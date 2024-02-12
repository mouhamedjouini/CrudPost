const express = require('express')
const mongoose = require('./config/db');
let app = express();
const AdminApi=require('./routes/admin');
const PostApi=require('./routes/post');
app.use(express.json());
app.use('/admin',AdminApi);
app.use('/post',PostApi);
app.listen(3000,()=>{
    console.log('server work');
})