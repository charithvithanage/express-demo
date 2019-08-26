'use strict';

var rejectedPromise = require('../lib/methods/rejectedPromise');

describe('rejectedPromise', function() {
  it('should pre-reject a promise', function(done) {
    rejectedPromise('foo')
      .catch(function(err) {
        expect(err).toBe('foo');
        done();
      })
  });
});
