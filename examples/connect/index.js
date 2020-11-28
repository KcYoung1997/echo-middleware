const connect = require('connect');
const app = connect();
const http = require('http');
const echo = require('../../');
 
app.use('/echo', echo);
http.createServer(app).listen(8080);

console.log(`Serving Echo at http://localhost:8080/echo`);