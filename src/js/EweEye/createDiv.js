EweEye.createDiv = function (id, content, classes) {
    if (classes && (!Array.isArray(classes) && !EweEye.isString(classes))) {
        throw "Invalid classes";
    }
    var div = document.createElement("div");
    if (id) {
        if (!EweEye.isString(id)) {
            throw "Invalid id";
        }
        div.id = id;
    }
    if (classes) {
        if (Array.isArray(classes)) {
            for (var i = 0, ilen = classes.length; i < ilen; i++) {
                if (!EweEye.isString(classes[i])) {
                    throw "Invalid class";
                }
                div.classList.add(classes[i]);
            }
        }
        else
        {
            if (!EweEye.isString(classes)) {
                throw "Invalid class";
            }
            div.classList.add(classes);
        }
    }
    if (content) {
        if (EweEye.isElement(content)) {
            div.appendChild = content;
        } else if (EweEye.isString(content)) {
            div.innerHTML = content;
        }
    }
    return div;
};