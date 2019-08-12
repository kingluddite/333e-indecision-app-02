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

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
