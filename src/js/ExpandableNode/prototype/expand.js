ExpandableNode.prototype.expand = function () {
    var uls = global.document.querySelectorAll("#" + this.id + " > ul");
    var ul = uls[uls.length - 1];
    ul.classList.remove("e4e-hidden");
    var collapseButtons = global.document.querySelectorAll("#" + this.id + " > button[value=collapse]");
    if (collapseButtons) {
        for (var i = 0, ilen = collapseButtons.length; i < ilen; i++) {
            collapseButtons[i].classList.remove("e4e-hidden");
        }
    }
    var expandButtons = global.document.querySelectorAll("#" + this.id + " > button[value=expand]");
    if (expandButtons) {
        for (var j = 0, jlen = expandButtons.length; j < jlen; j++) {
            expandButtons[j].classList.add("e4e-hidden");
        }
    }
};