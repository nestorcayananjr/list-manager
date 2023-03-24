const express = require("express");
const app = express();
const db = require('./databasepg');
const path = require('path');




app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('./dist/bundle.js', (req, res) => {
  res.sendFile('../dist/bundle.js');
})



app.listen(8000, () => {
    console.log("listening on port 8000");
});

// db.query(`select * from users`, (err, result) =>{
//     if (!err){
//         console.log(result.rows);
//     } else {
//         console.log(err.message);
//     }
//     db.end();
// });