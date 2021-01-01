// Credit where credit is due... 
// Source from LoDash
// https://github.com/lodash/lodash/blob/master/isElement.js
EweEye.isElement = function (value) {
    return EweEye.isObjectLike(value) && value.nodeType === 1 && !EweEye.isPlainObject(value);
};