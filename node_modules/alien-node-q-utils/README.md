# alien-node-q-utils
Helper functions for promises with Q on NodeJS. The functions are pure and curried with Ramda.

[![Build Status](https://travis-ci.org/AlienCreations/alien-node-q-utils.svg?branch=master)](https://travis-ci.org/AlienCreations/alien-node-q-utils) [![Coverage Status](https://coveralls.io/repos/AlienCreations/alien-node-q-utils/badge.svg?branch=master&service=github)](https://coveralls.io/github/AlienCreations/alien-node-q-utils?branch=master) [![npm version](http://img.shields.io/npm/v/alien-node-q-utils.svg)](https://npmjs.org/package/alien-node-q-utils) [![Dependency Status](https://david-dm.org/AlienCreations/alien-node-q-utils.svg)](https://david-dm.org/AlienCreations/alien-node-q-utils)

## Install

```
$ npm install alien-node-q-utils --save
```

Run the specs

```
$ npm test
```
## Methods
#### rejectedPromise
A pre-rejected promise that throws the rejection into an expected `catch` block.

```js
  it('should pre-reject a promise', function(done) {
    rejectedPromise('foo')
      .catch(function(err) {
        expect(err).toBe('foo');
        done();
      })
  });
```

#### resolvedPromise
A pre-resolved promise that passes the resolution into the expected `then` block.

```js
  it('should pre-resolve a promise', function(done) {
    resolvedPromise('foo')
      .then(function(data) {
        expect(data).toBe('foo');
        done();
      })
  });
```

#### rejectOnErrorOrResolve
Given a function signature of `fn(deferred, err, data)` this will reject `deferred` if `err` is provided, 
otherwise resolve `deferred` with `data`. 
 - Don't forget this function is curried, so the arity must be recognized. (If you omit the `data` param, you will get a function that accepts only the `data` param.)

```js

  var mockPromiseNoError = function(resolveWith) {
    var deferred = Q.defer();
    rejectOnErrorOrResolve(deferred, undefined, resolveWith);
    return deferred.promise;
  };
  
  var mockPromiseWithError = function(err) {
    var deferred = Q.defer();
    rejectOnErrorOrResolve(deferred, err, undefined);
    return deferred.promise;
  };

  it('should resolve if no error is provided', function(done) {
    var deferred = Q.defer();
    mockPromiseNoError('foo')
      .then(function(data) {
        expect(data).toBe('foo');
        done();
      });
  });
  
  it('should reject if error is provided', function(done) {
    var deferred = Q.defer();
    mockPromiseWithError('foo')
      .catch(function(err) {
        expect(err).toBe('foo');
        done();
      });
  });
```

## TODO 
 - Need specs and descriptions for new mapP methods
