Node.prototype._buttonClass = function (subselector, classes, apply) {
    var buttons = global.document.querySelectorAll("#" + this.id + " " + subselector);
    if (buttons) {
        for (var i = 0, ilen = buttons.length; i < ilen; i++) {
            if (_.isArray(classes)) {
                for (var j = 0, jlen = classes.length; j < jlen; j++) {
                    if (_.isString(classes[j])) {
                        if (apply) {
                            buttons[i].classList.add(classes[j]);
                        } else {
                            buttons[i].classList.remove(classes[j]);
                        }
                    }
                }
            } else if (_.isString(classes)) {
                if (apply) {
                    buttons[i].classList.add(classes);
                } else {
                    buttons[i].classList.remove(classes);
                }
            }
        }
    }
};