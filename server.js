var express = require('express');
var app = express();
var server = require('http').createServer(app);

var Warehouse = require('./src/warehouse')
var RestockerTest = require('./src/restockerTest')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var warehouse = new Warehouse();
var restocker = new RestockerTest();
restocker.addList(warehouse);

app.get('/', function(request, response){
  response.render("index",{ stock: warehouse.stock });

  function addToCart() {
  console.log("hello");
  var item = warehouse.stock.first
  warehouse.remove(item)
  cart.add(item)
  }
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
