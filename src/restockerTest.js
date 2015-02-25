var Item = require('./item')    
function RestockerTest() {
}

module.exports =  RestockerTest;

RestockerTest.prototype.addList =
function(warehouse) {
  warehouse.add( new Item ('Almond Toe Court Shoes, Patent Black',99) );
  warehouse.add( new Item ('Blazer',175));
  };
