const express = require('express');
const app = express();
const echo = require('../../');

app.get('/echo', echo);
app.listen(8080);

console.log(`Serving Echo at http://localhost:8080/echo`);