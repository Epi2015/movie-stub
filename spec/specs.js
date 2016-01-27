describe('timeOfDay', function(){
  it("it determines if movie is a matinee ", function(){
    expect(timeOfDay("Yes")).to.equal(true)
    expect(timeOfDay("No")).to.equal(false)
  });
});


describe('Ticket', function() {
  it("builds a price for theatre entrance given user's age and movie/time preference", function() {
    var testTicket = new Ticket("The Revenant", "2:00pm", "68");
    expect(testTicket.movie).to.equal("The Revenant");
    expect(testTicket.time).to.equal("2:00pm");
    expect(testTicket.age).to.eql(68);
  });
});
