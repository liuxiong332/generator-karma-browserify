var _ = require('underscore');

var obj = [1, 2, 3, 4];
var ret = _.reject(obj, function(val) { return val === 2; });
console.log(JSON.stringify(obj));
console.log(JSON.stringify(ret));
