
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 5000;

// const db = mysql.createConnection({
//     host : 'localhost',
//     user :'root',
//     password :'',
//     database :'my_db'
// })

// db.connect((err)=>{
//     if(err) throw err;
//     console.log('database connected.');
    
// })

app.listen(port,()=>{

    console.log(`server running on port ${port}`);
   
});


