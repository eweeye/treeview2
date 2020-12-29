var ExpandableNode = function (idOrContent) {
    // Check if existing node is requested
    if (EweEye.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            if (EweEye.Node.prototype._nodes[idOrContent] instanceof ExpandableNode.init) {
                return EweEye.Node.prototype._nodes[idOrContent];
            }
        }
    }
    // Else create new one
    var node = new ExpandableNode.init(idOrContent);
    node._nodes[node.id] = node;
    return node;
};
ExpandableNode.prototype = Object.create(Node.init.prototype);
ExpandableNode.prototype.Icon = {
    Style: "fas",
    Expanded: "minus-square",
    Collapsed: "plus-square"
};
ExpandableNode.init = function (content) {
    EweEye.Node.init.call(this, content);
};
ExpandableNode.init.prototype = ExpandableNode.prototype;
EweEye.ExpandableNode = ExpandableNode;