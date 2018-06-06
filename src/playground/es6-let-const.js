const fullName1 = "Molly Smitch";
const fullName2 = "Phillip Smitch";

const getFirstName1 = (firstName) => {
    return fullName1.split(" ")[0];
};

const getFirstName2 = (firstName) => fullName2.split(" ")[0];

console.log("First Name 1: ", getFirstName1());
console.log("First Name 2: ", getFirstName2());