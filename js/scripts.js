function Ticket(time, movie, age) {
  this.time = time;
  this.movie = [];
  this.age = age;
  this.cost = [];
}


var movie = ["Spectyre", "Minions", "Fast & Furious 7", "Revenant", "Hateful Eight","Star Wars"];



var price = function(){
  var basePrice= 10;
  var totalDiscount = 0;

  if (time >= 0 && time < 18) {
    totalDiscount +=2;
  }
  for (var i = 0; i < movies.length; i++); {
    if (this.movie[i] <= [2]) {
      totalDiscount +=2;
    }
  }
  if (age >= 65){
    totalDiscount +=2;
  }

  return basePrice - totalDiscount;
}

$(document).ready(function(){
  debugger;
  var inputtedTime = $("input#time").val();
  var inputtedMovie = $("input#movie").val();
  var inputtedAge = $("input#age").val();


  var newTicket = Ticket(time, movie, age)
  newTicket.cost.push(price)

});
