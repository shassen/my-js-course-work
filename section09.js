console.log("asdf asdf asdf");

const home = {
  kitchen: [
    "Refridgerator",
    "Stove",
    "Sink",
    "Dishwasher",
    "Pantry",
    "Counter-top",
  ],
  bathroom: ["Toilet", "Sink", "Soap", "Towel", "Candle"],
  garage: [
    "Car",
    "Tools",
    "Sports Equipment",
    "Gardening Equipment",
    "Bikes",
    "Recycling",
    "Trashcan",
  ],
  familyRoom: "Television",
  bedroom: ["Bed", "Nightstand", "Dresser", "Television", "Pillows"],
  person: {
    name: "Shawn",
    age: 32,
    favShows: {
      ozark: {
        genre: "Thriller",
        release: 2017,
      },
      strangerThings: {
        genre: "Sci-fi",
        release: 2016,
      },
      ridiculousness: {
        genre: "Comedy",
        release: 2010,
      },
    },
  },
  decorate: function (first, second) {
    return [this.person.name, this.garage[second]];
  },
};

console.log(home.decorate(2, 4));

const personGarage = home.decorate(2, 4);

console.log("personGarage: ", personGarage);
console.log(
  `${personGarage[0]}'s favorite thing in the Garage is the ${personGarage[1]}`
);

let test = home.person.age;
console.log("test: ", test);
test = 40;

console.log("test after reasign to 40: ", test);
console.log("home.person.age: ", home.person.age);
console.log("home object: ", home);

const { person: people, bedroom } = home;
// console.log("shows: ", shows);
console.log("people: ", people);
console.log("bedroom: ", bedroom);

firstName = people.name;
firstName = "john";
console.log("people after reasign: ", firstName);
console.log("home after reasign of people.name: ", home);
