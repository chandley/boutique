function RestockerTest() {
}

module.exports = RestockerTest;

RestockerTest.prototype.addList =
function(warehouse) {
  first = new Item ('Almond Toe Court Shoes, Patent Black',99)
  warehouse.add(first);
  warehouse.add( new Item ('Blazer',175));
  };
