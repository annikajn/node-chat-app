require('./config/config');

const path = require('path');
const publicpath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT;
var app = express();

app.use(express.static(publicpath));

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
module.exports = {app};
  