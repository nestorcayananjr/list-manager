const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
// });

//routers
const listRouter = require('../server/routes/lists.js');


app.use('/lists', listRouter);

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.listen(8000, () => {
    console.log("listening on port 8000");
});