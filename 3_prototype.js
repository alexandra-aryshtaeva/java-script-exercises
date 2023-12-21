// Every object has a protype! The prototype is another object!

function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  //   this.sayHello = function () {
  //     console.log("Hello!");
  //   };
}

// player  and player2 are protypes!
const player1 = new Player("Robin", "o");
const player2 = new Player("Corrin", "x");

// player1.sayHello();
// player2.sayHello();

// __________________________________________________________________
let x = new Object();
Object.getPrototypeOf(x);

// Player.prototype.sayHello = function () {
//   console.log("Hello I'm a player");
// };

// player1.sayHello();

// // ________________________________________________________________

// // Player.prototype.__proto__
// Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// // Output may slightly differ based on the browser
// player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
