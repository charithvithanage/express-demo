'use strict';

var R = require('ramda'),
    Q = require('q');

// (a -> b) -> (c, a) -> (c, b)
var callOnPair = R.curry(function(f, pair) {
  return [pair[0], f(pair[1])];
});

// (a -> b) -> [(c, a)] -> [(c, b)]
var mapPairs = R.curry(function(f, pairs) {
  return R.map(callOnPair(f), pairs);
});

module.exports = mapPairs;
