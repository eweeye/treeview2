Node.prototype.render = function () {
    var node = document.getElementById(this.id);
    var parent = null;
    if (node) {
        parent = node.parentElement;
    } else {
        node = this.createElement();
    }
    if (node) {
        if (parent) {
            parent.removeChild(node);
        }
        var target = null;
        if (this.parent instanceof TreeView.init) {
            parent = document.getElementById(this.parent.id);
            target = parent;
        } else if (this.parent instanceof Node.init) {
            parent = global.document.querySelectorAll("#" + this.parent.id + " > ul.e4e-nodes");
            target = parent[parent.length - 1];
        }
        if (!target) {
            return false;
        }
        target.appendChild(node);
        return true;
    }
};