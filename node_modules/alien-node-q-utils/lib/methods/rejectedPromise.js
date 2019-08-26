'use strict';

var Q = require('q');

/**
 * Returns a promise that is pre-rejected with provided rejection pass-through.
 * @param rejection
 * @returns {Q.promise}
 */
function rejectedPromise(rejection) {
  return Q.reject(rejection);
}

module.exports = rejectedPromise;
