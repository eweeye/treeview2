Node.prototype.add = function (item) {
    if (item instanceof Node.init) {
        if (item.parent !== null && item.parent !== this) {
            item.parent.remove(item);
        }
        if (item.parent === null) {
            this.nodes[item.id] = item;
            item.parent = this;
            EweEye.RenderQueue.add(this).add(item);
        }
    } else if (typeof item === 'string' || (typeof item === 'object' && item != null && !Array.isArray(item) && getTag(item) == '[object String]')) {
        var node = Node(item);
        this.nodes[node.id] = node;
        node.parent = this;
        EweEye.RenderQueue.add(this).add(node);
    } else {
        throw "Invalid item";
    }
    return this;
};