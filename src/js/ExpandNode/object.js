var ExpandNode = function (idOrContent, attributes) {
    // Check if existing node is requested
    if (_.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            if (EweEye.Node.prototype._nodes[idOrContent] instanceof ExpandNode.init) {
                return EweEye.Node.prototype._nodes[idOrContent];
            }
        }
    }
    // Else create new one
    var node = new ExpandNode.init(idOrContent, attributes);
    node._nodes[node.id] = node;
    return node;
};
ExpandNode.prototype.expandedIconClass = "far fa-plus fa-fw";
ExpandNode.prototype.collapsedIconClass = "far fa-minus fa-fw";
ExpandNode.init = function (content, attributes) {
    var self = this;
    EweEye.Node.init.call(self, content);
    if (_.isObject(attributes)) {
        _.assign(self, attributes);
    }
};
ExpandNode.init.prototype = ExpandNode.prototype;
Object.setPrototypeOf(ExpandNode.init.prototype, Node.init.prototype);
EweEye.ExpandNode = ExpandNode;