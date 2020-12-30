EweEye.createButton = function (action, classes, iconClasses) {
    if (!EweEye.isString(action)) {
        throw "Invalid action";
    }
    if (classes && (!Array.isArray(classes) && !EweEye.isString(classes))) {
        throw "Invalid classes";
    }
    if (iconClasses && (!Array.isArray(iconClasses) && !EweEye.isString(classes))) {
        throw "Invalid classes";
    }
    var button = document.createElement("button");
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!EweEye.isString(classes[i])) {
                    throw "Invalid class";
                }
                button.classList.add(classes[i]);
            }
        } else {
            button.classList.add(classes);
        }
    }
    var span = document.createElement("span");
    if (iconClasses) {
        if (Array.isArray(iconClasses)) {
            for (var j = 0, jlen = iconClasses.length; j < jlen; j++) {
                if (!EweEye.isString(iconClasses[j])) {
                    throw "Invalid class";
                }
                span.classList.add(iconClasses[j]);
            }
        }
        else
        {
            span.classList.add(iconClasses);
        }
    }
    button.value = action;
    button.appendChild(span);
    return button;
};