var TreeView = function (id) {
    if (_.isString(id)) {
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
    var element = global.document.getElementById(id);
    if (!element) {
        throw "Invalid id";
    }
    if (element.tagName !== "UL") {
        throw "Invalid element";
    }
    element.addEventListener("click", function (e) {
        var target = e.target;
        var button = null;
        while (target !== element) {
            if (target && target.nodeName === "BUTTON") {
                button = target;
            } else if (target.nodeName === "LI") {
                if (EweEye.Node.prototype._nodes.hasOwnProperty(target.id) >= 0) {
                    var node = EweEye.Node.prototype._nodes[target.id];
                    if (node instanceof EweEye.ExpandableNode) {
                        if (button) {
                            if (button.value.toLowerCase() === "expand") {
                                node.expand();
                            } else if (button.value.toLowerCase() === "collapse") {
                                node.collapse();
                            }
                        } else {
                            var event1 = new CustomEvent("node-click", { detail: node });
                            element.dispatchEvent(event1);
                        }
                    } else if (node instanceof EweEye.Node) {
                        var event2 = new CustomEvent("node-click", { detail: node });
                        element.dispatchEvent(event2);
                    }
                    break;
                }
            }
            target = target.parentElement;
        }
    });
    element.classList.add("e4e-treeview");
    var self = this;
    self.id = id;
    self.nodes = {};
};
TreeView.init.prototype = TreeView.prototype;
EweEye.TreeView = TreeView;