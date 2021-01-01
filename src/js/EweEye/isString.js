// Credit where credit is due... 
// Source from LoDash
// https://github.com/lodash/lodash/blob/master/isString.js
EweEye.isString = function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && EweEye.getTag(value) == '[object String]');
};