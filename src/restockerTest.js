var Item = require('./item')    
function RestockerTest() {
}

module.exports =  RestockerTest;

RestockerTest.prototype.addList =
function(warehouse) {
  warehouse.add( { description: 'Almond Toe Court Shoes, Patent Black', 
                   price: '99',
                   category: 'Women\'s Footwear',
                   quantity: '1'
                 });
  warehouse.add( { description: 'Blazer', 
                   price: '175',
                   category: 'Men\'s Formalwear',
                   quantity: '1'
                 });
  };
