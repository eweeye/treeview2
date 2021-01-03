ExpandableNode.prototype.createElement = function () {
    // <li>
    //   <button></button>
    //   <div></div>
    //   <ul></ul>
    // </li>
    var li = EweEye.createItem(this.id, "e4e-node");
    var divContainer = EweEye.createDiv();
    li.appendChild(divContainer);
    var divExpander = EweEye.createDiv(null, "e4e-expand");
    divContainer.appendChild(divExpander);
    var expandButton = EweEye.createButton(null, "expand");
    var collapseButton = EweEye.createButton(null, "collapse", "e4e-hidden");
    divExpander.appendChild(expandButton);
    var expandIcon = EweEye.createIcon(null, this.ExpandedIconClass.split(" "));
    expandButton.appendChild(expandIcon);
    divExpander.appendChild(collapseButton);
    var collapseIcon = EweEye.createIcon(null, this.CollapsedIconClass.split(" "));
    collapseButton.appendChild(collapseIcon);

    var divIcon = EweEye.createDiv(null, "e4e-icon");
    divContainer.appendChild(divIcon);
    var divContent;
    if (this.selectable) {
        divContent = EweEye.createDiv(null, "e4e-content", null);
        var buttonContent = EweEye.createButton(null, "select");
        EweEye.addContent(buttonContent, this.content);
        divContent.appendChild(buttonContent);
    } else {
        divContent = EweEye.createDiv(null, "e4e-content");
        EweEye.addContent(divContent, this.content);
    }
    divContainer.appendChild(divContent);
    var ul = EweEye.createList(null, ["e4e-hidden", "e4e-nodes"]);
    li.appendChild(ul);
    return li;
};