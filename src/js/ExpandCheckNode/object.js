var ExpandCheckNode = function (idOrContent, attributes) {
    // Check if existing node is requested
    if (_.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            if (EweEye.Node.prototype._nodes[idOrContent] instanceof ExpandCheckNode.init) {
                return EweEye.Node.prototype._nodes[idOrContent];
            }
        }
    }
    // Else create new one
    var node = new ExpandCheckNode.init(idOrContent, attributes);
    node._nodes[node.id] = node;
    return node;
};
ExpandCheckNode.prototype.expandedIconClass = "far fa-plus fa-fw";
ExpandCheckNode.prototype.collapsedIconClass = "far fa-minus fa-fw";
ExpandCheckNode.prototype.checkedIconClass = "far fa-check-square fa-fw";
ExpandCheckNode.prototype.uncheckedIconClass = "far fa-square fa-fw";
ExpandCheckNode.init = function (content, attributes) {
    var self = this;
    EweEye.Node.init.call(self, content);
    if (_.isObject(attributes)) {
        _.assign(self, attributes);
    }
    EweEye.inherit(self, ExpandNode.init);
};
ExpandCheckNode.init.prototype = ExpandCheckNode.prototype;
Object.setPrototypeOf(ExpandCheckNode.init.prototype, Node.init.prototype);
EweEye.ExpandCheckNode = ExpandCheckNode;