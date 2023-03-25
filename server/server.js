const express = require("express");
const app = express();
const db = require('./database');
const path = require('path');


app.get('/', (req, res) => {
  console.log('get request')
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});



app.get('/sampleData', (req, res) => {
  db.query(`select * from users`, (err,result) => {
    if (!err){
      return res.send(result.rows);
    } else {
        console.log(err.message);
    }
    db.end();
  })
})

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.listen(8000, () => {
    console.log("listening on port 8000");
});