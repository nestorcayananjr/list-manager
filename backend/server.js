const express = require("express");
const app = express();
const db = require('./databasepg');

app.listen(8000, () => {
    console.log("listening on port 8000");
});

db.query(`select * from users`, (err, result) =>{
    if (!err){
        console.log(result.rows);
    } else {
        console.log(err.message);
    }
    db.end();
});