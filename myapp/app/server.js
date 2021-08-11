let http = require('http');
let math = require('./math');
let url = require('url');

// http://localhost:3000/add?x=20&y=15
// http://localhost:3000/sub?x=20&y=15
let server = http.createServer( (req, res) => {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true ).query;
    if(pathname === '/add') {
        res.write(math.add(parseInt(query["x"]), parseInt(query["y"])).toString());
    } else {
        res.write(math.sub(parseInt(query["x"]), parseInt(query["y"])).toString());
    }
    res.end();
});

server.listen(3000, () => console.log("started : http://localhost:3000"));
