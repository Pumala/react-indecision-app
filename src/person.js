// const isAdult = (age) => age >= 18;
// const canDrink = (age) => age >= 21;
// const isSenior = (age) => age >= 65;

// export {
//     isAdult,
//     canDrink,
//     isSenior as default
// }

import validator from "validator";

console.log("testing", validator.isEmail("testing"));
console.log("testing@gmail.com", validator.isEmail("testing@gmail.com"));

export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export default isSenior;

// const template = React.createElement('p', {}, 'testing');
const template = <p>Hello</p>;

ReactDOM.render(template, document.getElementById("box"));


// import "./utils.js";
// import { square, add } from "./utils.js";

// console.log("hello there from app.js!");
// console.log(square(4));
// console.log(add(44, 5));


import isSenior, { isAdult, canDrink } from "./person.js";
import validator from "validator";

console.log("is adult: 18", isAdult(18));
console.log("is adult: 15", isAdult(15));

console.log("can drink: 18", canDrink(18));
console.log("can drink: 22", canDrink(22));

console.log("is senior: 69", canDrink(69));
console.log("is senior: 23", canDrink(23));
