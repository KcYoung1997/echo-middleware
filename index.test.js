const app = require('express')();
const echo = require('.');
const request = require('supertest')(app);
var server;

beforeAll(async () => {
    app.use(echo);
    server = await app.listen(1337);
});

afterAll(() => {
    server.close();
});

it('returns get', done => {
    request
        .get('/')
        .expect(/^GET/, done);
});

it('returns post', done => {
    request
        .post('/')
        .expect(/^POST/, done);
});

it('returns path', done => {
    request
        .get('/test')
        .expect(/^GET \/test/, done);
});

it('returns header', done => {
    request
        .get('/')
        .set('returns_header', 'test')
        .expect(/\nreturns_header: test\n/, done);
});
