EweEye.createItem = function (id, classes) {
    if (classes && (!Array.isArray(classes) && !EweEye.isString(classes))) {
        throw "Invalid classes";
    }
    var li = document.createElement("li");
    if (id) {
        if (!EweEye.isString(id)) {
            throw "Invalid id";
        }
        li.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!EweEye.isString(classes[i])) {
                    throw "Invalid class";
                }
                li.classList.add(classes[i]);
            }
        }
        else {
            if (!EweEye.isString(classes)) {
                throw "Invalid class";
            }
            li.classList.add(classes);
        }
    }
    return li;
};