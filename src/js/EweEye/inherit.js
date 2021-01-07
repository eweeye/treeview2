// https://stackoverflow.com/questions/7509831/alternative-for-the-deprecated-proto
EweEye.inherit = function (child, parent) {
    var f = function () { }; // defining temp empty function
    f.prototype = parent.prototype;
    f.prototype.constructor = f;
    child.prototype = new f();
    child.prototype.constructor = child; // restoring proper constructor for child class
    parent.prototype.constructor = parent; // restoring proper constructor for parent class    
};