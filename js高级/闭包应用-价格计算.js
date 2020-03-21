var car = ( function() {
  var start = 13;
  var total = 0;
  return {
    price: function(n, flag) {
      if (n<=3) {
        total = start;
      } else {
        total = start + (n-3)*3
      }
      return flag? total+10:total;
    }
  }
})()

console.log(car.price(4, true));
console.log(car.price(4, false));