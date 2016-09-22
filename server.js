const http = require('http');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

http.createServer(app).listen(3030, function(){
  console.log('Servidor online!');
});