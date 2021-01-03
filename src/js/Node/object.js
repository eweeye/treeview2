var Node = function (idOrContent, attributes) {
    // Check if existing node is requested
    if (_.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            return EweEye.Node.prototype._nodes[idOrContent];
        }
    }
    // Else create new one
    var node = new Node.init(idOrContent, attributes);
    node._nodes[node.id] = node;
    return node;
};
Node.NextId = (function () {
    var nextId = 1;
    return function () {
        return nextId++;
    };
})();
Node.prototype = {
    selectable: false
};
Node.prototype.DefaultIconClass = "far fa-sticky-note fa-fw";
Node.init = function (content, attributes) {
    var self = this;
    self.id = "e4e-" + Node.NextId();
    self.content = content || "";
    self.parent = null;    
    if (_.isObject(attributes)) {
        _.assign(self, attributes);
    }
    self.nodes = {};
};
Node.init.prototype = Node.prototype;
EweEye.Node = Node;