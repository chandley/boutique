function RestockerFromFile() { 
}

RestockerFromFile.prototype.addList =
function(warehouse,url) {
  parsed = Baby.parse(url, { delimiter: ";" } );
  rows = parsed.data;
  console.log(rows)
};


  
