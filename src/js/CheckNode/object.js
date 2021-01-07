var CheckNode = function (idOrContent, attributes) {
    // Check if existing node is requested
    if (_.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            if (EweEye.Node.prototype._nodes[idOrContent] instanceof Node.init) {
                return EweEye.Node.prototype._nodes[idOrContent];
            }
        }
    }
    // Else create new one
    var node = new CheckNode.init(idOrContent, attributes);
    node._nodes[node.id] = node;
    return node;
};
CheckNode.prototype.checkedIconClass = "far fa-check-square fa-fw";
CheckNode.prototype.uncheckedIconClass = "far fa-square fa-fw";
CheckNode.init = function (content, attributes) {
    var self = this;
    EweEye.Node.init.call(self, content);
    if (_.isObject(attributes)) {
        _.assign(self, attributes);
    }
};
CheckNode.init.prototype = CheckNode.prototype;
Object.setPrototypeOf(CheckNode.init.prototype, Node.init.prototype);
EweEye.CheckNode = CheckNode;