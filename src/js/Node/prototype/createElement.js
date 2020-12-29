Node.prototype.createElement = function () {
    // <li>
    //   <ul></ul>
    // </li>
    var li = document.createElement("li");
    li.id = this.id;
    li.innerHTML = this.content;
    var ul = document.createElement("ul");
    li.appendChild(ul);
    return li;
};