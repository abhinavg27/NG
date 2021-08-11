module.exports.add = (x, y) => x + y;

module.exports.sub = (x,y) => x - y;

// not exported, can't access this in other module
let mul =(x,y) => x * y;