function register(cart){
    var sum = 0;
    for(var key in cart){
        sum += +cart[key];
    }
    return sum;
}

// Input
var cart = {  
    apple: "1.25",
    candy: ".99",
    water: "25.01",
    carrot: "0.60",
    umbrella: "10.34",
    proteinShake: "22.36"
  };
console.log(register(cart));
