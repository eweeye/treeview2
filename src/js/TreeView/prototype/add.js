TreeView.prototype.add = function (item) {
    if (item instanceof Node.init) {
        if (item.parent !== null && item.parent !== this) {
            item.parent.remove(item);
        }
        if (item.parent === null) {
            this._trees[this.id].nodes[item.id] = item;
            item.parent = this;
            EweEye.RenderQueue.add(this).add(item);
        }
    } else if (EweEye.isString(item)) {
        var node = Node(item);
        this._trees[this.id].nodes[node.id] = node;
        node.parent = this;
        EweEye.RenderQueue.add(this).add(node);
    } else {
        throw "Invalid item";
    }
    return this;
};