ExpandableNode.prototype.createElement = function () {
    // <li>
    //   <button></button>
    //   <div></div>
    //   <ul></ul>
    // </li>
    var li = EweEye.createItem(this.id, "e4e-node");
    var divContainer = EweEye.createDiv();
    li.appendChild(divContainer);
    var divIcon = EweEye.createDiv(null, null, "e4e-icon");
    divContainer.appendChild(divIcon);
    var expandButton = EweEye.createButton(null, "expand");
    var collapseButton = EweEye.createButton(null, "collapse", "e4e-hidden");
    divIcon.appendChild(expandButton);
    var expandIcon = EweEye.createIcon(null, [this.Icon.Style, this.Icon.Collapsed]);
    expandButton.appendChild(expandIcon);
    divIcon.appendChild(collapseButton);
    var collapseIcon = EweEye.createIcon(null, [this.Icon.Style, this.Icon.Expanded]);
    collapseButton.appendChild(collapseIcon);
    var divContent = EweEye.createDiv(null, this.content, "e4e-content");
    divContainer.appendChild(divContent);
    var ul = EweEye.createList(null, ["e4e-hidden", "e4e-nodes"]);
    li.appendChild(ul);
    return li;
};