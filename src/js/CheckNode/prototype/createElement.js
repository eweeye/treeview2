CheckNode.prototype.createElement = function () {
    var li = EweEye.createItem(this.id, "e4e-node");
    var divIcon = EweEye.createDiv(null, "e4e-icon");
    var icon = EweEye.createIcon(null, this.defaultIconClass.split(" "));
    divIcon.appendChild(icon);
    var divContent = EweEye.createDiv(null, "e4e-content");
    EweEye.addContent(divContent, this.content);
    var divContainer = EweEye.createDiv();
    divCheck = EweEye.createDiv(null, "e4e-check", null);
    var buttonUncheck = EweEye.createButton(null, "check");
    var uncheckIcon = EweEye.createIcon(null, this.uncheckedIconClass.split(" "));
    buttonUncheck.appendChild(uncheckIcon);
    divCheck.appendChild(buttonUncheck);
    var buttonCheck = EweEye.createButton(null, "uncheck");
    var checkIcon = EweEye.createIcon(null, this.checkedIconClass.split(" "));
    buttonCheck.appendChild(checkIcon);
    divCheck.appendChild(buttonCheck);
    if (this.checked) {
        buttonUncheck.classList.add("e4e-hidden");
    } else {
        buttonCheck.classList.add("e4e-hidden");
    }
    divContainer.appendChild(divCheck);
    if (this.selectable) {
        var divSelect = EweEye.createDiv(null, "e4e-select");
        var buttonContent = EweEye.createButton(null, "select");
        buttonContent.appendChild(divIcon);
        EweEye.addContent(divContent, this.content);
        buttonContent.appendChild(divContent);
        divSelect.appendChild(buttonContent);
        divContainer.appendChild(divSelect);
    } else {
        divContainer.appendChild(divIcon);
        divContainer.appendChild(divContent);
    }
    li.appendChild(divContainer);
    var ul = EweEye.createList(null, "e4e-nodes");
    li.appendChild(ul);
    return li;
};