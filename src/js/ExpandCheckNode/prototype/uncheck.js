ExpandCheckNode.prototype.uncheck = function () {
    if (this.checked) {
        this.checked = false;
        this._buttonClass("> div > div.e4e-check > button[value=check]", "e4e-hidden", false);
        this._buttonClass("> div > div.e4e-check > button[value=uncheck]", "e4e-hidden", true);
    }
};