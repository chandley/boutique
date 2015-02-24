var Item = require('../src/item');
describe("Item", function() {
  var item = new Item('dreamcoat',5);

  it("has a description", function() {
    expect(item.description).toEqual('dreamcoat');
  })
  
  it("has a price", function() {
    expect(item.price).toEqual(5);
    
  });
  
  
}) 

