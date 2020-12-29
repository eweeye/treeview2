TreeView.prototype.remove = function (item) {
    if (item instanceof Node.init) {
        if (item.parent !== null && item.parent === this) {
            delete this.nodes[item.id];
            item.parent = null;
            EweEye.RenderQueue.add(this).add(item);
        }
    } else {
        throw "Invalid item";
    }
    return this;
};