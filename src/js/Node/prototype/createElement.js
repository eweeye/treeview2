Node.prototype.createElement = function () {
    // <li>
    //   <ul></ul>
    // </li>
    var li = EweEye.createItem(this.id, "e4e-node");
    var divContainer = EweEye.createDiv();
    li.appendChild(divContainer);
    var divToggle = EweEye.createDiv(null, "e4e-toggle");
    divContainer.appendChild(divToggle);
    var divIcon = EweEye.createDiv(null, "e4e-icon");
    var icon = EweEye.createIcon(null, this.DefaultIconClass.split(" "));
    divIcon.appendChild(icon);
    var divContent = EweEye.createDiv(null, "e4e-content");
    EweEye.addContent(divContent, this.content);
    if (this.selectable) {
        var divSelect = EweEye.createDiv(null, "e4e-select");
        var buttonContent = EweEye.createButton(null, "select");
        buttonContent.appendChild(divIcon);
        EweEye.addContent(divContent, this.content);
        buttonContent.appendChild(divContent);
        divSelect.appendChild(buttonContent);
        li.appendChild(divSelect);
    } else {
        divContainer.appendChild(divIcon);
        divContainer.appendChild(divContent);
        li.appendChild(divContainer);
    }
    var ul = EweEye.createList(null, "e4e-nodes");
    li.appendChild(ul);
    return li;
};