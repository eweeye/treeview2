ExpandableNode.prototype.expand = function () {
    var uls = global.document.querySelectorAll("#" + this.id + " > ul.e4e-nodes");
    var ul = uls[uls.length - 1];
    ul.classList.remove("e4e-hidden");
    var collapseButtons = global.document.querySelectorAll("#" + this.id + " > div > div.e4e-icon > button[value=collapse]");
    if (collapseButtons) {
        for (var i = 0, ilen = collapseButtons.length; i < ilen; i++) {
            collapseButtons[i].classList.remove("e4e-hidden");
            collapseButtons[i].focus();
        }
    }
    var expandButtons = global.document.querySelectorAll("#" + this.id + " > div > div.e4e-icon > button[value=expand]");
    if (expandButtons) {
        for (var j = 0, jlen = expandButtons.length; j < jlen; j++) {
            expandButtons[j].classList.add("e4e-hidden");
        }
    }
};