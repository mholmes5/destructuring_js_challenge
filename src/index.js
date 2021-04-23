import animals, { useAnimals } from "./data";

//console.log(animals);
const [cat, dog] = animals;

const [animal, makeSound] = useAnimals(dog);

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
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
