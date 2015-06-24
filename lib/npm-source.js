'use strict';

var Rx = require('rx');
var npmChecker = require('npm-license');

var utils = require('./utils');

module.exports = exports = function (targetPath) {
  return Rx.Observable.create(function (observer) {
    try {
      npmChecker.init({
        start: targetPath,
        include: 'dependencies',
        depth: 'all',
      }, function (results) {
        utils.listFromMap(results, {
          type: 'npm'
        }).forEach(observer.onNext.bind(observer));

        observer.onCompleted();
      });
    } catch (e) {
      observer.onCompleted();
    }
  });
};
