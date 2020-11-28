const Koa = require('koa');
const app = new Koa();
const http = require('http');
const echo = require('../../');

// Koa functions differently to other Node web frameworks, below is a method for compatibility
app.use((ctx, next) => {
    if(ctx.path === '/echo') {
        ctx.status = 200;
        echo(ctx.req, ctx.res, next); 
    }
    else next();
});
app.listen(8080);

console.log(`Serving Echo at http://localhost:8080/echo`);