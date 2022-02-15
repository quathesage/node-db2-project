// STRETCH
const cars = [
  {
    vin: "KM8SC73E15U984562",
    make: "Nissan",
    model: "Gtr",
    mileage: 1234,
    title: "Clean",
    transmission: "Automatic",
  },
  {
    vin: "2FTHF26L7GCA92029",
    make: "Dodge",
    model: "Charger",
    mileage: 123223,
    title: "Clean",
    transmission: "Automatic",
  },
  {
    vin: "JH4DB1540NS801082",
    make: "Tesla",
    model: "Model S",
    mileage: 20021,
    title: "Clean",
    transmission: "Automatic",
  },
];
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert(cars);
    });
};
