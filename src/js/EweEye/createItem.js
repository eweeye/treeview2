EweEye.createItem = function (id, classes) {
    if (classes && (!Array.isArray(classes) && !_.isString(classes))) {
        throw "Invalid classes";
    }
    var li = document.createElement("li");
    if (id) {
        if (!_.isString(id)) {
            throw "Invalid id";
        }
        li.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!_.isString(classes[i])) {
                    throw "Invalid class";
                }
                li.classList.add(classes[i]);
            }
        }
        else {
            if (!_.isString(classes)) {
                throw "Invalid class";
            }
            li.classList.add(classes);
        }
    }
    return li;
};