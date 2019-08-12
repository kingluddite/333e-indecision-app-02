"use strict";

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(55, 1, 2005));

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(10, 20, 3000));

// const user = {
//   name: 'John',
//   cities: ['LA', 'Vegas', 'NYC'],
//   printCoolPlace() {
//     return this.cities.map(city => `${this.name} has lived in ${city}`);
//   },
// };

// console.log(user.printCoolPlace());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
