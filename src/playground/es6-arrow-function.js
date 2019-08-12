// const square = function(x) {
//   return x * x;
// };

// const squareArrow = x => x * x;
// console.log(square(8));
// console.log(squareArrow(12));

const user = {
  name: 'Jane Doe',
};

// ES6 arrow function verbose syntax
const getLastName = name => name.split(' ')[1];
// ES6 arrow function expression syntax
const getFirstName = name => name.split(' ')[0];

console.log(getFirstName(user.name)); // Jane
console.log(getLastName(user.name)); // Doe
