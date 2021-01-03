EweEye.createList = function (id, classes) {
    if (classes && (!Array.isArray(classes) && !_.isString(classes))) {
        throw "Invalid classes";
    }
    var ul = document.createElement("ul");
    if (id) {
        if (!_.isString(id)) {
            throw "Invalid id";
        }
        ul.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!_.isString(classes[i])) {
                    throw "Invalid class";
                }
                ul.classList.add(classes[i]);
            }
        }
        else {
            if (!_.isString(classes)) {
                throw "Invalid class";
            }
            ul.classList.add(classes);
        }
    }
    return ul;
};