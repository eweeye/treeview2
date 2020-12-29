RenderQueue.prototype.add = function (item) {
    if (item instanceof TreeView.init ||
        item instanceof Node.init) {
        if (this._queue.indexOf(item) < 0) {
            this._queue.push(item);
        }
    }
    return this;
};