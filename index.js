module.exports = (req, res, next) => {
    if (typeof res.status === Function) res.status(200);
    // Params i.e. GET /echo HTTP/1.1
    res.write(`${req.method} ${req.originalUrl || req.url} HTTP/${req.httpVersion}`);
    // Headers i.e. host: localhost:8080
    Object.entries(req.headers).forEach(([k,v]) => { 
        res.write(`\n${k}: ${v}`);
    });
    res.end();
    next();
};

