// Credit where credit is due... 
// Source from LoDash
// https://github.com/lodash/lodash/blob/master/isObjectLike.js
EweEye.isObjectLike = function (value) {
    return typeof value === 'object' && value !== null;
};