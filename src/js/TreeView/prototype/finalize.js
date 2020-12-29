TreeView.prototype.finalize = function () {
    EweEye.RenderQueue.process();
    return this;
};