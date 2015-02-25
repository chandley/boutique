var Item = require('./item')
function Warehouse () {
  this.stock = []; 
}

module.exports = Warehouse;

Warehouse.prototype.add =
function(item) {
  this.stock.push(item);
};

Warehouse.prototype.remove =
function(item) {
  index = this.stock.indexOf(item);
  this.stock.splice(index, 1);
};

Warehouse.prototype.addList =
function() {
  var first = new Item('Almond Toe Court Shoes, Patent Black',99)
  this.add(first);
  this.add( new Item ('Blazer',175));
};
