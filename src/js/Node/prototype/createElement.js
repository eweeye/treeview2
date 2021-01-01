Node.prototype.createElement = function () {
    // <li>
    //   <ul></ul>
    // </li>
    var li = EweEye.createItem(this.id, "e4e-node");
    var divContainer = EweEye.createDiv();
    li.appendChild(divContainer);
    var divIcon = EweEye.createDiv(null, null, "e4e-icon");
    divContainer.appendChild(divIcon);
    var icon = EweEye.createIcon(null, [this.Icon.Style, this.Icon.Default]);
    divIcon.appendChild(icon);
    var divContent = EweEye.createDiv(null, this.content, "e4e-content");
    divContainer.appendChild(divContent);
    var ul = EweEye.createList(null, "e4e-nodes");
    li.appendChild(ul);
    return li;
};