var ExpandableNode = function (idOrContent, attributes) {
    // Check if existing node is requested
    if (_.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            if (EweEye.Node.prototype._nodes[idOrContent] instanceof ExpandableNode.init) {
                return EweEye.Node.prototype._nodes[idOrContent];
            }
        }
    }
    // Else create new one
    var node = new ExpandableNode.init(idOrContent, attributes);
    node._nodes[node.id] = node;
    return node;
};
ExpandableNode.prototype = Object.create(Node.init.prototype);
ExpandableNode.prototype.ExpandedIconClass = "far fa-plus fa-fw";
ExpandableNode.prototype.CollapsedIconClass = "far fa-minus fa-fw";
ExpandableNode.init = function (content, attributes) {
    var self = this;
    EweEye.Node.init.call(self, content);
    if (_.isObject(attributes)) {
        _.assign(self, attributes);
    }
};
ExpandableNode.init.prototype = ExpandableNode.prototype;
EweEye.ExpandableNode = ExpandableNode;