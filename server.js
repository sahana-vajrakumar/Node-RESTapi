//Creting Server to listen to the port set to environment variable PORT or 3000
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
