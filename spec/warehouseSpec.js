var Warehouse = require('../src/warehouse')

describe("Warehouse", function() {
  
  var warehouse;  

  beforeEach(function() {
    warehouse = new Warehouse()
  });

  it("starts off empty", function() {
    expect(warehouse.stock).toEqual([]);
  });
  
  it("can add an item", function() {
    warehouse.add('item')
    expect(warehouse.stock).toEqual(['item']);  
  })

  it("can remove an item", function() {
    warehouse.add('item')
    warehouse.remove('item')
    expect(warehouse.stock).toEqual([]);
  });
  
   it("can give a stock list", function() {
     warehouse.add('item')
     warehouse.add('another item')
     expect(warehouse.stock.length).toEqual(2);
   });
   
});  

