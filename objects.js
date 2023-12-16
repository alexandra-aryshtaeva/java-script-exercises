// what is an object constructor?

function Coach(name) {
  this.name = name;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("Steve", "O");
const player2 = new Player("IM THE NEW PLAYER", "X");

player2.sayName();
