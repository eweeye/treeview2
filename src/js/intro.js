(function (global, lodash) {
    // Check if Lodash has been provided
    var _ = null;
    if (!lodash) {
        // If not, see if it exists on global
        if (!global.hasOwnProperty("_")) {
            throw "Lodash required";
        }
        _ = global._;
    } else {
        _ = lodash;
    }
    var EweEye = {};