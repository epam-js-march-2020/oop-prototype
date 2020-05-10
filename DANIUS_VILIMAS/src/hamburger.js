function Hamburger(size, stuffing) {
    menuPosition.call(this);
    this.name = size.name + " hamburger with " + stuffing.name;
    this.size = new menuPosition(size.name, size.price, size.calories);
    this.stuffing = new menuPosition(stuffing.name, stuffing.price, stuffing.calories);
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
}

Hamburger.prototype = Object.create(menuPosition.prototype);
Hamburger.prototype.constructor = Hamburger;

/* Узнать размер гамбургера */
Hamburger.prototype.getSize = function () {
    return this.size;
}

/* Узнать начинку гамбургера */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing.name;
}