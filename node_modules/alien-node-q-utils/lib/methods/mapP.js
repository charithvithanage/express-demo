'use strict';

var R = require('ramda'),
    Q = require('q');


// (a -> Promise b) -> [a] -> Promise [b]
var mapP = R.curry(function(f, vs) {
  return Q.all(R.map(f, vs));
});

module.exports = mapP;
