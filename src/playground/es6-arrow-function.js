function square(x) {
    return x * x;
}

const constSquare = (x) => {
    return x * x;
}

const arrowSquare = (x) => {
    return x * x;
};

const cleanerArrowSquare = (x) => x * x;

console.log("Regular Func: ", square(3));
console.log("Const Func: ", constSquare(4));
console.log("Arrow Func: ", arrowSquare(5));
console.log("Cleaner Arrow Func: ", cleanerArrowSquare(6));