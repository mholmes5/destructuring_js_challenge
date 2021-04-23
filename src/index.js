//import animals, { useAnimals } from "./data";

//console.log(animals);
// const [cat, dog] = animals;

// const [animal, makeSound] = useAnimals(dog);

// console.log(animal);
// makeSound();

//console.log(dog);

// const { name, sound: dogSound } = dog;
// console.log(dogSound);

//const { name = "Spot", sound = "Grrr", age = 3 } = dog;
//console.log(name + "  " + age);

// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;

// console.log(food);

// //CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  colorsByPopularity: [teslaTopColor],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty }
} = tesla;

const {
  colorsByPopularity: [hondaTopColor],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty }
} = honda;

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Zero to Sixty (s) </th>
        <th>Top Color</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaZeroToSixty}</td>
        <td>{teslaTopColor}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaZeroToSixty}</td>
        <td>{hondaTopColor}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
