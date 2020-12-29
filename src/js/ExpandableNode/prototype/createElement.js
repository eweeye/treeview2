ExpandableNode.prototype.createElement = function () {
    // <li>
    //   <button></button>
    //   <div></div>
    //   <ul></ul>
    // </li>
    var li = document.createElement("li");
    li.id = this.id;
    var expandButton = EweEye.createButton("expand", null, [this.Icon.Style, this.Icon.Collapsed]);
    var collapseButton = EweEye.createButton("collapse", "e4e-hidden", [this.Icon.Style, this.Icon.Expanded]);
    li.appendChild(expandButton);
    li.appendChild(collapseButton);
    var div = document.createElement("div");
    div.innerHTML = this.content;
    li.appendChild(div);
    var ul = document.createElement("ul");
    ul.classList.add("e4e-hidden");
    li.appendChild(ul);
    return li;
};