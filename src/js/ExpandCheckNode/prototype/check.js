ExpandCheckNode.prototype.check = function () {
    if (!this.checked) {
        this.checked = true;
        this._buttonClass("> div > div.e4e-check > button[value=check]", "e4e-hidden", true);
        this._buttonClass("> div > div.e4e-check > button[value=uncheck]", "e4e-hidden", false);
    }
};