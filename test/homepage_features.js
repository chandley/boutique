describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('gives a welcome message', function(){
    casper.then(function(){
      expect("body").to.include.text("Welcome to the boutique");
    });
  });

});
