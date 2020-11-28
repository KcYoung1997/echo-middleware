module.exports = (req, res, next) => {
    res.write(`${req.method} ${req.originalUrl} HTTP/${req.httpVersion}`);
    Object.entries(req.headers).forEach(([k,v]) => { 
        res.write(`\n${k}: ${v}`);
    });
    res.end();
    next();
};

