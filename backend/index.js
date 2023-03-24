const express = require("express");
const app = express();
const client = require('./databasepg');

app.listen(8000, () => {
    console.log("listening on port 8000");
});

client.query(`select * from users`, (err, result) =>{
    if (!err){
        console.log(result.rows);
    } else {
        console.log(err.message);
    }
    client.end();
});