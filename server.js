var express = require('express');
var app = express();
var server = require('http').createServer(app);

var Item = require('./src/item')
var Warehouse = require('./src/warehouse')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
 
  var warehouse = new Warehouse();
  var shoes = new Item('shoes',10);
  warehouse.add(shoes);
  response.render("index",{ stock: warehouse.stock[0].description });
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
