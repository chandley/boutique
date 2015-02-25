describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('gives a welcome message', function(){
    casper.then(function(){
      expect("body").to.include.text("Welcome to the boutique");
    });
  });

  it("shows a list with item descriptions", function() {
     casper.then(function(){
       expect("#warehouse").to.include.text("Shoes")
       expect("#warehouse").to.include.text("Blazer")
    });
  });  
  
  it("can add an item to cart", function() {
    casper.then(function(){
      this.mouse.click('#add-item');
       expect("#warehouse").to.not.include.text("Shoes");
       expect("#cart").to.include.text("Shoes");
    });
  });
  
});
