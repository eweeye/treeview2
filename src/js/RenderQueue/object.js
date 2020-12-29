var RenderQueue = function () {
    if (EweEye.hasOwnProperty("RenderQueue")) {
        return EweEye.RenderQueue;
    }
    return new RenderQueue.init();
};
RenderQueue.prototype = {};
RenderQueue.init = function () {
    var self = this;
    self._queue = [];
};
RenderQueue.init.prototype = RenderQueue.prototype;
EweEye.RenderQueue = RenderQueue();