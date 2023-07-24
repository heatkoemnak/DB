
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port${port}`);
})


