'use strict';

var R = require('ramda');

/**
 * Reject a promise with an error if provided [err], else resolve with provided data [resolveWith]
 * @param {Object} deferred
 * @param {Object} err
 * @param {*} resolveWith
 * @returns {void}
 */
var rejectOnErrorOrResolve = R.curry(function(deferred, err, resolveWith) {
  if (err) {
    deferred.reject(err);
  } else {
    deferred.resolve(resolveWith);
  }
});

module.exports = rejectOnErrorOrResolve;
