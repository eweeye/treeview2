var Node = function (idOrContent) {
    // Check if existing node is requested
    if (EweEye.isString(idOrContent)) {
        if (EweEye.Node.prototype._nodes.hasOwnProperty(idOrContent)) {
            return EweEye.Node.prototype._nodes[idOrContent];
        }
    }
    // Else create new one
    var node = new Node.init(idOrContent);
    node._nodes[node.id] = node;
    return node;
};
Node.NextId = (function () {
    var nextId = 1;
    return function () {
        return nextId++;
    };
})();
Node.prototype = {};
Node.prototype.Icon = {
    Style: "far",
    Default: "fa-sticky-note"
};
Node.init = function (content) {
    var self = this;
    self.id = "e4e-" + Node.NextId();
    self.content = content || "";
    self.parent = null;
    self.nodes = {};
};
Node.init.prototype = Node.prototype;
EweEye.Node = Node;