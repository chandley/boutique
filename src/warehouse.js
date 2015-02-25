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


