//_____________________________ OBJECT________________________________________

const coach1 = {
  name: "Tim",
  age: 23,
};

const coach2 = {
  name: "Tim2",
};

// ________________________________

const player1 = {
  name: "Steve",
  marker: "O",
};

const player2 = {
  name: "Garret",
  marker: "X",
};

//_________ WHAT IS AN OBJECT CONSTRUCTOR?____________________________________________________-

function Coach(name, age, gender) {
  if (!name || !age) {
    throw Error("YA FORGOT THE PARAMS");
  }

  this.name = name;
  this.age = age;
}

// ________________________________

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const coolplayer1 = new Player("Steve", "O");
const coolplayer2 = new Player("Garret", "X");

function Coach(name, age) {
  this.name = name;
  this.age = age;
  this.sayAge = function () {
    console.log(this.age);
  };
}
const coolCoach = new Coach("Tim", 23);

// player2.sayName();
coolCoach.sayAge();
