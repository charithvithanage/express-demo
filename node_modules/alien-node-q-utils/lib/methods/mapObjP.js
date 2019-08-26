'use strict';

var R = require('ramda'),
    Q = require('q');

var mapPairs = require('./mapPairs.js');

// (a -> Promise b) -> [(c, a)] -> Promise [(c, b)]
var mapPairsP = R.curry(function(f, pairs) {
  var pairsWithPromiseAsSecondValue = mapPairs(f, pairs),
      pairPromises                  = pairsWithPromiseAsSecondValue,
      promiseOfPairs                = Q.all(pairPromises);
  return promiseOfPairs;
});

// (a -> Promise b) -> {c: a} -> Promise {c: b}
var mapObjP = R.curry(function(f, obj) {
  var pairs = R.toPairs(obj);
  return mapPairsP(f, pairs).then(R.fromPairs);
});

module.exports = mapObjP;
