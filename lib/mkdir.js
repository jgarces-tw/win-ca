// Generated by CoffeeScript 1.12.2

/*
mkdir if not exists
Poor's man mkdirp
 */
var fs;

fs = require('fs');

module.exports = function(s, fn) {
  return fs.mkdir(s, function(err) {
    if (!err) {
      fn();
      return;
    }
    return fs.stat(s, function(err2, stat) {
      if (!err2 && stat.isDirectory()) {
        return fn();
      } else {
        return fn(err);
      }
    });
  });
};