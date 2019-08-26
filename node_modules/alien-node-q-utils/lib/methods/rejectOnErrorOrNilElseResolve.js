'use strict';

var R = require('ramda');

/**
 * Reject a promise with an error if provided [err], or if [resolveWith] is Nil, else resolve with provided data [resolveWith]
 * @param {Object} deferred
 * @param {Object} err
 * @param {*} resolveWith
 * @returns {void}
 */
var rejectOnErrorOrNilElseResolve = R.curry(function(deferred, err, resolveWith) {
  if (err) {
    deferred.reject(err);
  } else if (R.isNil(resolveWith)) {
    deferred.reject();
  } else {
    deferred.resolve(resolveWith);
  }
});

module.exports = rejectOnErrorOrNilElseResolve;
