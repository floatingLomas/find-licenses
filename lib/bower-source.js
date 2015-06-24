'use strict';

var Rx = require('rx');
var bowerChecker = require('bower-license');

var utils = require('./utils');

module.exports = exports = function (targetPath) {
  var previousPath = process.cwd();

  return Rx.Observable.create(function (observer) {
    try {
      process.chdir(targetPath);

      bowerChecker.init(targetPath, function (results) {
        process.chdir(previousPath);

        utils.listFromMap(results, {
          type: 'bower'
        }).forEach(observer.onNext.bind(observer));

        observer.onCompleted();
      });
    } catch (e) {
      observer.onCompleted();
    }
  });
};
