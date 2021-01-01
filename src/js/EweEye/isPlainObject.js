// Credit where credit is due... 
// Source from LoDash
// https://github.com/lodash/lodash/blob/master/isPlainObject.js
EweEye.isPlainObject = function (value) {
    if (!EweEye.isObjectLike(value) || EweEye.getTag(value) != '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};