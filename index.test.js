const echo = require('.');
const request = require('supertest');


describe('test server compatibility', () => {
    it('express', async () => {
        const app = require('express')();
        app.use(echo);
        const server = await app.listen(8080);
        await request(app).get('/').expect(/^GET/);
        await server.close();
    });

    it('connect', async () => {
        const app =  require('connect')();
        app.use(echo);
        const server = await require('http').createServer(app).listen(8080);
        await request(app).get('/').expect(/^GET/);
        await server.close();
    });

    it('koa', async () => {
        const Koa = require('koa');
        const app = new Koa();
        const http = require('http');
        
        app.use((ctx, next) => {
            if(ctx.path === '/echo') {
                ctx.status = 200;
                echo(ctx.req, ctx.res, next); 
            }
            else next();
        });
        const server = await app.listen(8080);
        await request('localhost:8080').get('/echo').expect(/^GET/);
        await server.close();
    });
});

describe('check return contents', () => {
    const app = require('express')();
    var server;

    beforeAll(async () => {
        app.use(echo);
        server = await app.listen(8080);
    });
    
    afterAll(() => {
        server.close();
    });

    it('returns get', done => {
        request(app)
            .get('/')
            .expect(/^GET/, done);
    });

    it('returns post', done => {
        request(app)
            .post('/')
            .expect(/^POST/, done);
    });

    it('returns path', done => {
        request(app)
            .get('/test')
            .expect(/^GET \/test/, done);
    });

    it('returns header', done => {
        request(app)
            .get('/')
            .set('returns_header', 'test')
            .expect(/\nreturns_header: test\n/, done);
    });
});