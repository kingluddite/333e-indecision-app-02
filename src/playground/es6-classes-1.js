class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let message = super.getGreeting();

    if (this.homeLocation) {
      message += ` I'm visiting from ${this.homeLocation}.`;
    }
    return message;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}
const me = new Student('Mike Martini', 44, 'Finance');
const other = new Student();
const meToo = new Traveler('John Doe', 22, 'Ireland');
const jd = new Traveler('Jane Doe', 22);
const nobody = new Traveler(undefined, undefined, 'Nowhere');
console.log(me.getDescription());
console.log(other.getDescription());
console.log(meToo.getGreeting());
console.log(jd.getGreeting());
console.log(nobody.getGreeting());
