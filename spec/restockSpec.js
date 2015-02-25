require('../src/restockFromFile')

describe("description", function() {
  xit("adds items to a warehouse from a file", function() {
    restocker = new RestockerFromFile();
    warehouse = jasmine.createSpyObj('warehouse',['add']);
    url = 'testdata.txt';
    restocker.addList(warehouse,url)
    expect(warehouse.add).toHaveBeenCalled();
  });
  
})

