const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

//declare routers
const listRouter = require('../server/routes/listRouter.js');
const studentRouter = require('../server/routes/studentRouter.js')
const tableRouter = require('../server/routes/tableRouter.js')

//endpoints
app.use('/table', tableRouter)
app.use('/students', studentRouter);
app.use('/lists', listRouter);

//serve the static files from '/dist'
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

//listening to the port
app.listen(8000, () => {
    console.log("listening on port 8000");
});