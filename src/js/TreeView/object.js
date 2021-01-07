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
            if (!button && target && target.nodeName === "BUTTON") {
                button = target;
            } else if (target.nodeName === "LI") {
                if (EweEye.Node.prototype._nodes.hasOwnProperty(target.id) >= 0) {
                    var node = EweEye.Node.prototype._nodes[target.id];
                    if (node instanceof ExpandCheckNode.init) {
                        if (button) {
                            switch (button.value.toLowerCase()) {
                                case "expand":
                                    node.expand();
                                    break;
                                case "collapse":
                                    node.collapse();
                                    break;
                                case "check":
                                    node.check();
                                    break;
                                case "uncheck":
                                    node.uncheck();
                                    break;
                                case "select":
                                    if (node.selectable) {
                                        var event1 = new CustomEvent("node-select", { detail: node });
                                        element.dispatchEvent(event1);
                                    }
                                    break;
                            }
                        }
                    } else if (node instanceof ExpandNode.init) {
                        if (button) {
                            switch (button.value.toLowerCase()) {
                                case "expand":
                                    node.expand();
                                    break;
                                case "collapse":
                                    node.collapse();
                                    break;
                                case "select":
                                    if (node.selectable) {
                                        var event2 = new CustomEvent("node-select", { detail: node });
                                        element.dispatchEvent(event2);
                                    }
                                    break;
                            }
                        }
                    } else if (node instanceof CheckNode.init) {
                        if (button) {
                            switch (button.value.toLowerCase()) {
                                case "check":
                                    node.check();
                                    break;
                                case "uncheck":
                                    node.uncheck();
                                    break;
                                case "select":
                                    if (node.selectable) {
                                        var event3 = new CustomEvent("node-select", { detail: node });
                                        element.dispatchEvent(event3);
                                    }
                                    break;
                            }
                        }
                    } else if (node instanceof Node.init) {
                        if (button) {
                            if (button.value.toLowerCase() === "select") {
                                if (node.selectable) {
                                    var event4 = new CustomEvent("node-select", { detail: node });
                                    element.dispatchEvent(event4);
                                }
                                break;
                            }
                        }
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