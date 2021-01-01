// Credit where credit is due... 
// Source from LoDash
// https://github.com/lodash/lodash/blob/master/.internal/getTag.js
EweEye.getTag = function(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
};