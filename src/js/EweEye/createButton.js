EweEye.createButton = function (id, action, classes) {
    if (!_.isString(action)) {
        throw "Invalid action";
    }
    if (classes && (!Array.isArray(classes) && !_.isString(classes))) {
        throw "Invalid classes";
    }
    var button = document.createElement("button");
    if (id) {
        if (!_.isString(id)) {
            throw "Invalid id";
        }
        button.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!_.isString(classes[i])) {
                    throw "Invalid class";
                }
                button.classList.add(classes[i]);
            }
        } else {
            if (!_.isString(classes)) {
                throw "Invalid class";
            }
            button.classList.add(classes);
        }
    }
    button.value = action;
    return button;
};