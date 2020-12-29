RenderQueue.prototype.process = function () {
    var counter = 0;
    while (this._queue.length > 0 && counter <= this._queue.length) {
        counter++;
        var item = this._queue.shift();
        if (item.render()) {
            counter = 0;
            continue;
        }
        this._queue.push(item);
    }
    return this;
};