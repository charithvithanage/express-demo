'use strict';

var Q = require('q');

/**
 * Returns a promise that is pre-resolved with provided resolution pass-through.
 * @param resolution
 * @returns {Q.promise}
 */
function resolvedPromise(resolution) {
  return Q(resolution);
}

module.exports = resolvedPromise;
