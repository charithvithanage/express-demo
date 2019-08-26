'use strict';

var resolvedPromise = require('../lib/methods/resolvedPromise');

describe('resolvedPromise', function() {
  it('should pre-resolve a promise', function(done) {
    resolvedPromise('foo')
      .then(function(data) {
        expect(data).toBe('foo');
        done();
      })
  });
});
