EweEye.addContent = function (element, content) {
    if (!element || !_.isElement(element)) {
        throw "Invalid element";
    }
    if (content) {
        if (_.isElement(content)) {
            element.appendChild = content;
        } else if (_.isString(content)) {
            element.innerHTML = content;
        }
    }
    return element;
};