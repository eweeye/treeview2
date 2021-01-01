EweEye.createButton = function (id, action, classes) {
    if (!EweEye.isString(action)) {
        throw "Invalid action";
    }
    if (classes && (!Array.isArray(classes) && !EweEye.isString(classes))) {
        throw "Invalid classes";
    }
    var button = document.createElement("button");
    if (id) {
        if (!EweEye.isString(id)) {
            throw "Invalid id";
        }
        button.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!EweEye.isString(classes[i])) {
                    throw "Invalid class";
                }
                button.classList.add(classes[i]);
            }
        } else {
            if (!EweEye.isString(classes)) {
                throw "Invalid class";
            }
            button.classList.add(classes);
        }
    }
    button.value = action;
    return button;
};