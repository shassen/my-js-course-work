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

// let test = home.person.age;
// console.log("test: ", test);
// test = 40;

// console.log("test after reasign to 40: ", test);
// console.log("home.person.age: ", home.person.age);
// console.log("home object: ", home);

// const { person: people, bedroom } = home;
// console.log("shows: ", shows);
// console.log("people: ", people);
// console.log("bedroom: ", bedroom);

// firstName = people.name;
// firstName = "john";
// console.log("people after reasign: ", firstName);
// console.log("home after reasign of people.name: ", home);

const loadData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/";

    const results = await Promise.all([fetch(url)]);
    console.log("results: ", results);

    const dataPromises = results[0].json();
    console.log("dataPromises: ", dataPromises);

    const finalData = await Promise.all([dataPromises]);
    console.log("final data: ", finalData);
    return finalData;
  } catch (err) {
    console.error("What are you doing, you are a disgrace: ", err);
  }
};
// console.log("loadData: ", loadData());

// let data = loadData();
// data.then((data) => {
//   return data;
// });
// console.log("data, ", data);

(async () => {
  const data = await loadData();
  console.log("data out of func: ", data);
  console.log("data test: ", data[0][90]);
  return data;
// })();

// let l = data;
// console.log("l: ", data);

// loadData().then((data) => {
//   console.log("data in call: ", data);
// });

// console.log("info: ", info);

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data: ", data);
//     return data;
//   })
//   .catch((err) => {
//     console.error("error: ", err);
//   });

// console.log("data out of promise", data);
