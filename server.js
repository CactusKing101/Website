const http = require('http');
const express = require('express');
const path = require('path');
const config = require('./config.json');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
for(let i = 0; i < config.pages.length; ++i) {
  app.get(`/${config.pages[i]}`, function(req,res){
    res.sendFile(path.join(__dirname + `/express/${config.pages[i]}.html`));
    //__dirname : It will resolve to your project folder.
  });
}
const server = http.createServer(app);
const port = 80;
server.listen(port);
console.debug('Server listening on port ' + port);