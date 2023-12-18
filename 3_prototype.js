function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  // .hello is a prototype!______________________________

  this.sayHello = function () {
    console.log("Hello!");
  };
}

const player1 = new Player("Robin", "o");
const player2 = new Player("Corrin", "x");

// player1.sayHello();
// player2.sayHello();

Object.getPrototypeOf(player1) === Player.prototype;
