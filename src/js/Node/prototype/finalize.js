Node.prototype.finalize = function () {
    EweEye.RenderQueue.process();
    return this;
};