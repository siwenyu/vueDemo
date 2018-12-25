const a = '21321321312';

function P(name, age) {
    this.name = name;
    this.age = age;
}
P.prototype.setName = function (name) {
    this.name = name;
    return;
}
P.prototype.getName = function (name) {
    return this.name;
}
let p1 = new P('司文宇', '18');

export {
    p1
}