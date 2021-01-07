ExpandCheckNode.prototype.collapse = function () {
    var uls = global.document.querySelectorAll("#" + this.id + " > ul.e4e-nodes");
    var ul = uls[uls.length - 1];
    ul.classList.add("e4e-hidden");
    this._buttonClass("> div > div.e4e-expand > button[value=collapse]", "e4e-hidden", true);
    this._buttonClass("> div > div.e4e-expand > button[value=expand]", "e4e-hidden", false);
};