EweEye.isString = function (value) {
    return (typeof value === 'string' || (typeof value === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]'));
};