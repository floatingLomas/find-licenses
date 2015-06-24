'use strict';

var Rx = require('rx');
var Observable = Rx.Observable;

var utils = require('./lib/utils');

var bowerSource = require('./lib/bower-source');
var npmSource = require('./lib/npm-source');

function finder(targetPath, done) {
  var combinedSource = Observable.merge(
    bowerSource(targetPath),
    npmSource(targetPath)
  ).map(utils.remapResult);

  if (typeof done === 'function') combinedSource.toArray().subscribe(done.bind(null, null), done);

  return combinedSource;
}

module.exports = exports = finder;
