var TreeView = function (id) {
    if (EweEye.isString(id)) {
        if (EweEye.TreeView.prototype._trees.hasOwnProperty(id)) {
            return EweEye.TreeView.prototype._trees[id];
        }
    }
    var tree = new TreeView.init(id);
    tree._trees[tree.id] = tree;
    return tree;
};
TreeView.prototype = {};
TreeView.init = function (id) {
    var domElmt = global.document.getElementById(id);
    if (!domElmt) {
        throw "Invalid id";
    }
    if (domElmt.tagName !== "UL") {
        throw "Invalid element";
    }
    var self = this;
    self.id = id;
    self.nodes = {};
};
TreeView.init.prototype = TreeView.prototype;
EweEye.TreeView = TreeView;